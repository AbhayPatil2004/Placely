import Problem from "../models/problem.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";


const AddProblem = async (req, res) => {

    try {

        const {
            title,
            slug,
            problemStatement,
            topic,
            subTopics,
            tags,
            pattern,
            difficulty,
            inputFormat,
            outputFormat,
            constraints,
            examples,
            starterCode,
            testCases,
            supportedLanguages,
            expectedTimeComplexity,
            expectedSpaceComplexity,
            order
        } = req.body;


        // -----------------------------------
        // Required fields
        // -----------------------------------

        if (
            !title ||
            !slug ||
            !problemStatement ||
            !topic ||
            !difficulty ||
            !examples ||
            !starterCode ||
            !testCases ||
            order === undefined ||
            order === null
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "All required fields must be provided",
                    {}
                )
            );
        }


        // -----------------------------------
        // Array validation
        // -----------------------------------

        if (
            !Array.isArray(subTopics) ||
            !Array.isArray(tags) ||
            !Array.isArray(pattern) ||
            !Array.isArray(constraints) ||
            !Array.isArray(examples) ||
            !Array.isArray(testCases) ||
            !Array.isArray(supportedLanguages)
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "subTopics, tags, pattern, constraints, examples, testCases and supportedLanguages must be arrays",
                    {}
                )
            );
        }


        // -----------------------------------
        // Difficulty validation
        // -----------------------------------

        const validDifficulties = [
            "EASY",
            "MEDIUM",
            "HARD"
        ];

        if (!validDifficulties.includes(difficulty)) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Please provide a correct difficulty",
                    {}
                )
            );
        }


        // -----------------------------------
        // Topic validation
        // -----------------------------------

        const validTopics = [
            "ARRAY",
            "STRING",
            "MATRIX",
            "HASHING",
            "SORTING",
            "BINARY_SEARCH",
            "TWO_POINTER",
            "SLIDING_WINDOW",
            "PREFIX_SUM",
            "RECURSION",
            "BACKTRACKING",
            "LINKED_LIST",
            "STACK",
            "QUEUE",
            "DEQUE",
            "HEAP",
            "TREE",
            "BINARY_SEARCH_TREE",
            "TRIE",
            "GRAPH",
            "GREEDY",
            "DIVIDE_AND_CONQUER",
            "DYNAMIC_PROGRAMMING",
            "BIT_MANIPULATION",
            "MATH"
        ];

        if (!validTopics.includes(topic)) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Please provide a correct topic",
                    {}
                )
            );
        }


        // -----------------------------------
        // Pattern validation
        // -----------------------------------

        const validPatterns = [
            "BRUTE_FORCE",
            "HASHING",
            "TWO_POINTER",
            "SLIDING_WINDOW",
            "PREFIX_SUM",
            "BINARY_SEARCH",
            "SORTING",
            "FAST_SLOW_POINTER",
            "MONOTONIC_STACK",
            "STACK",
            "QUEUE",
            "HEAP",
            "GREEDY",
            "RECURSION",
            "BACKTRACKING",
            "DIVIDE_AND_CONQUER",
            "BIT_MANIPULATION",
            "GRAPH_TRAVERSAL",
            "BFS",
            "DFS",
            "TOPOLOGICAL_SORT",
            "UNION_FIND",
            "TRIE",
            "DYNAMIC_PROGRAMMING"
        ];

        const invalidPatterns = pattern.filter(
            item => !validPatterns.includes(item)
        );

        if (invalidPatterns.length > 0) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Please provide valid patterns",
                    {
                        invalidPatterns
                    }
                )
            );
        }


        // -----------------------------------
        // Supported languages validation
        // -----------------------------------

        const validLanguages = [
            "cpp",
            "java",
            "javascript",
            "python"
        ];

        const invalidLanguages = supportedLanguages.filter(
            language => !validLanguages.includes(language)
        );

        if (invalidLanguages.length > 0) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Please choose valid programming languages",
                    {
                        invalidLanguages
                    }
                )
            );
        }


        // -----------------------------------
        // Starter Code validation
        // -----------------------------------

        if (
            typeof starterCode !== "object" ||
            starterCode === null ||
            Array.isArray(starterCode)
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "starterCode must be an object",
                    {}
                )
            );
        }


        const requiredStarterLanguages = [
            "cpp",
            "java",
            "javascript",
            "python"
        ];

        for (const language of requiredStarterLanguages) {

            if (
                typeof starterCode[language] !== "string" ||
                starterCode[language].trim() === ""
            ) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        `Starter code for ${language} is required`,
                        {}
                    )
                );
            }
        }


        // -----------------------------------
        // Examples validation
        // -----------------------------------

        for (const example of examples) {

            if (
                !example ||
                typeof example !== "object" ||
                typeof example.input !== "string" ||
                typeof example.output !== "string"
            ) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "Each example must contain input and output",
                        {}
                    )
                );
            }

        }


        // -----------------------------------
        // Test Cases validation
        // -----------------------------------

        for (const testCase of testCases) {

            if (
                !testCase ||
                typeof testCase !== "object" ||
                typeof testCase.input !== "string" ||
                typeof testCase.expectedOutput !== "string"
            ) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "Each test case must contain input and expectedOutput",
                        {}
                    )
                );
            }

        }


        // -----------------------------------
        // Order validation
        // -----------------------------------

        if (
            typeof order !== "number" ||
            !Number.isInteger(order) ||
            order < 1
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Order must be an integer greater than 0",
                    {}
                )
            );
        }


        // -----------------------------------
        // Duplicate problem check
        // -----------------------------------

        const alreadyExists = await Problem.findOne({
            slug: slug.toLowerCase().trim()
        });

        if (alreadyExists) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Problem already exists. Please choose another slug.",
                    {}
                )
            );
        }


        // -----------------------------------
        // Create problem
        // -----------------------------------

        const problem = await Problem.create({

            title: title.trim(),

            slug: slug.toLowerCase().trim(),

            problemStatement,

            topic,

            subTopics,

            tags,

            pattern,

            difficulty,

            inputFormat,

            outputFormat,

            constraints,

            examples,

            starterCode,

            testCases,

            supportedLanguages,

            expectedTimeComplexity,

            expectedSpaceComplexity,

            order

        });


        // -----------------------------------
        // Response
        // -----------------------------------

        return res.status(201).json(
            new ApiResponse(
                201,
                "Problem added successfully",
                problem
            )
        );

    }

    catch (error) {

        // MongoDB duplicate slug error
        if (error.code === 11000) {

            return res.status(400).json(
                new ApiError(
                    400,
                    "A problem with this slug already exists",
                    {}
                )
            );

        }

        console.error(error);

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                error
            )
        );
    }
};

const GetProblem = async (req, res) => {

    try {

        const { slug } = req.params;

        if (!slug) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Problem slug is required",
                    {}
                )
            );
        }

        const problem = await Problem.findOne({
            slug: slug.toLowerCase().trim(),
            isActive: true
        });

        if (!problem) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Problem not found",
                    {}
                )
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Problem fetched successfully",
                problem
            )
        );

    } catch (error) {

        console.error(error);

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                error
            )
        );
    }
};

export {
    AddProblem ,
    GetProblem 
}