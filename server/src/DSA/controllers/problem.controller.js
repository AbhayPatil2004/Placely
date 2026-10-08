import Problem from "../models/problem.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";
import Solved from "../models/solved.model.js";
import { GetStudentId } from "../../utils/studentDetails.js";

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
            driverCode,
            testCases,
            supportedLanguages,
            expectedTimeComplexity,
            expectedSpaceComplexity,
            companies,
            order,
            isActive
        } = req.body;

        // Required fields
        if (
            !title?.trim() ||
            !slug?.trim() ||
            !problemStatement?.trim() ||
            !topic ||
            !difficulty ||
            !starterCode ||
            !driverCode ||
            !Array.isArray(examples) ||
            !Array.isArray(testCases) ||
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

        // Array validation
        if (
            !Array.isArray(subTopics) ||
            !Array.isArray(tags) ||
            !Array.isArray(pattern) ||
            !Array.isArray(constraints) ||
            !Array.isArray(supportedLanguages)
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "subTopics, tags, pattern, constraints and supportedLanguages must be arrays",
                    {}
                )
            );
        }

        // Difficulty validation
        const validDifficulties = ["EASY", "MEDIUM", "HARD"];

        if (!validDifficulties.includes(difficulty)) {
            return res.status(400).json(
                new ApiError(400, "Please provide a correct difficulty", {})
            );
        }

        // Topic validation
        const validTopics = [
            "INTRODUCTION", "VARIABLES", "DATA_TYPES", "INPUT_OUTPUT",
            "OPERATORS", "CONDITIONALS", "LOOPS", "FUNCTIONS",
            "ARRAY", "STRING", "MATRIX", "TIME_SPACE_COMPLEXITY",
            "RECURSION", "OOP", "SEARCHING", "SORTING", "BINARY_SEARCH",
            "HASHING", "TWO_POINTER", "SLIDING_WINDOW", "PREFIX_SUM",
            "LINKED_LIST", "STACK", "QUEUE", "DEQUE", "BACKTRACKING",
            "HEAP", "TREE", "BINARY_SEARCH_TREE", "TRIE", "GREEDY",
            "DIVIDE_AND_CONQUER", "GRAPH", "DYNAMIC_PROGRAMMING",
            "BIT_MANIPULATION", "MATH"
        ];

        if (!validTopics.includes(topic)) {
            return res.status(400).json(
                new ApiError(400, "Please provide a correct topic", {})
            );
        }

        // Pattern validation
        const validPatterns = [
            "BRUTE_FORCE", "HASHING", "TWO_POINTER", "SLIDING_WINDOW",
            "PREFIX_SUM", "BINARY_SEARCH", "SORTING", "FAST_SLOW_POINTER",
            "MONOTONIC_STACK", "STACK", "QUEUE", "HEAP", "GREEDY",
            "RECURSION", "BACKTRACKING", "DIVIDE_AND_CONQUER",
            "BIT_MANIPULATION", "GRAPH_TRAVERSAL", "BFS", "DFS",
            "TOPOLOGICAL_SORT", "UNION_FIND", "TRIE", "DYNAMIC_PROGRAMMING"
        ];

        const invalidPatterns = pattern.filter(
            item => !validPatterns.includes(item)
        );

        if (invalidPatterns.length > 0) {
            return res.status(400).json(
                new ApiError(400, "Please provide valid patterns", {
                    invalidPatterns
                })
            );
        }

        // Supported language validation
        const validLanguages = ["cpp", "java", "javascript", "python"];

        if (
            supportedLanguages.length === 0 ||
            new Set(supportedLanguages).size !== supportedLanguages.length
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "At least one supported language is required; duplicates are not allowed",
                    {}
                )
            );
        }

        const invalidLanguages = supportedLanguages.filter(
            language => !validLanguages.includes(language)
        );

        if (invalidLanguages.length > 0) {
            return res.status(400).json(
                new ApiError(400, "Please choose valid programming languages", {
                    invalidLanguages
                })
            );
        }

        // Validate language-code objects
        const validateLanguageCode = (code, fieldName) => {
            if (
                !code ||
                typeof code !== "object" ||
                Array.isArray(code)
            ) {
                return `${fieldName} must be an object`;
            }

            for (const language of supportedLanguages) {
                if (
                    typeof code[language] !== "string" ||
                    !code[language].trim()
                ) {
                    return `${fieldName} for ${language} is required`;
                }
            }

            return null;
        };

        // Student starter code validation
        const starterCodeError = validateLanguageCode(
            starterCode,
            "Starter code"
        );

        if (starterCodeError) {
            return res.status(400).json(
                new ApiError(400, starterCodeError, {})
            );
        }

        // Backend driver code validation
        const driverCodeError = validateLanguageCode(
            driverCode,
            "Driver code"
        );

        if (driverCodeError) {
            return res.status(400).json(
                new ApiError(400, driverCodeError, {})
            );
        }

        // Examples validation
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
                        "Each example must contain string input and output",
                        {}
                    )
                );
            }
        }

        // Test cases validation
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
                        "Each test case must contain string input and expectedOutput",
                        {}
                    )
                );
            }

            if (
                testCase.isPublic !== undefined &&
                typeof testCase.isPublic !== "boolean"
            ) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "testCase.isPublic must be a boolean",
                        {}
                    )
                );
            }
        }

        // At least one test case is required
        if (testCases.length === 0) {
            return res.status(400).json(
                new ApiError(400, "At least one test case is required", {})
            );
        }

        // Order validation
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

        // Duplicate problem check
        const normalizedSlug = slug.toLowerCase().trim();

        const alreadyExists = await Problem.findOne({
            slug: normalizedSlug
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

        // Create problem
        const problem = await Problem.create({
            title: title.trim(),
            slug: normalizedSlug,
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
            driverCode,
            testCases,
            supportedLanguages,
            expectedTimeComplexity,
            expectedSpaceComplexity,
            companies,
            order,
            ...(isActive === undefined ? {} : { isActive })
        });

        return res.status(201).json(
            new ApiResponse(
                201,
                "Problem added successfully",
                problem
            )
        );
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "A problem with this slug already exists",
                    {}
                )
            );
        }

        console.error("AddProblem Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const UpdateProblem = async (req, res) => {
    try {
        const { slug } = req.params;

        if (!slug?.trim()) {
            return res.status(400).json(
                new ApiError(400, "Problem slug is required", {})
            );
        }

        const problem = await Problem.findOne({
            slug: slug.toLowerCase().trim()
        });

        if (!problem) {
            return res.status(404).json(
                new ApiError(404, "Problem not found", {})
            );
        }

        const {
            title,
            newSlug,
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
            driverCode,
            testCases,
            supportedLanguages,
            expectedTimeComplexity,
            expectedSpaceComplexity,
            companies,
            order,
            isActive
        } = req.body;

        // ==========================================
        // VALIDATE REQUIRED STRING FIELDS
        // ==========================================

        if (
            title !== undefined &&
            (typeof title !== "string" || !title.trim())
        ) {
            return res.status(400).json(
                new ApiError(400, "Title must be a non-empty string", {})
            );
        }

        if (
            problemStatement !== undefined &&
            (typeof problemStatement !== "string" ||
                !problemStatement.trim())
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Problem statement must be a non-empty string",
                    {}
                )
            );
        }

        // ==========================================
        // VALIDATE DIFFICULTY
        // ==========================================

        if (difficulty !== undefined) {
            const validDifficulties = ["EASY", "MEDIUM", "HARD"];

            if (!validDifficulties.includes(difficulty)) {
                return res.status(400).json(
                    new ApiError(400, "Please provide a correct difficulty", {})
                );
            }
        }

        // ==========================================
        // VALIDATE TOPIC
        // ==========================================

        if (topic !== undefined) {
            const validTopics = [
                "INTRODUCTION",
                "VARIABLES",
                "DATA_TYPES",
                "INPUT_OUTPUT",
                "OPERATORS",
                "CONDITIONALS",
                "LOOPS",
                "FUNCTIONS",
                "ARRAY",
                "STRING",
                "MATRIX",
                "TIME_SPACE_COMPLEXITY",
                "RECURSION",
                "OOP",
                "SEARCHING",
                "SORTING",
                "BINARY_SEARCH",
                "HASHING",
                "TWO_POINTER",
                "SLIDING_WINDOW",
                "PREFIX_SUM",
                "LINKED_LIST",
                "STACK",
                "QUEUE",
                "DEQUE",
                "HEAP",
                "TREE",
                "BINARY_SEARCH_TREE",
                "TRIE",
                "GREEDY",
                "BACKTRACKING",
                "DIVIDE_AND_CONQUER",
                "GRAPH",
                "DYNAMIC_PROGRAMMING",
                "BIT_MANIPULATION",
                "MATH"
            ];

            if (!validTopics.includes(topic)) {
                return res.status(400).json(
                    new ApiError(400, "Please provide a correct topic", {})
                );
            }
        }

        // ==========================================
        // VALIDATE ARRAY FIELDS
        // ==========================================

        const arrayFields = {
            subTopics,
            tags,
            pattern,
            constraints,
            examples,
            testCases,
            supportedLanguages,
            companies
        };

        for (const [field, value] of Object.entries(arrayFields)) {
            if (value !== undefined && !Array.isArray(value)) {
                return res.status(400).json(
                    new ApiError(400, `${field} must be an array`, {})
                );
            }
        }

        // ==========================================
        // VALIDATE PATTERNS
        // ==========================================

        if (pattern !== undefined) {
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
                    new ApiError(400, "Please provide valid patterns", {
                        invalidPatterns
                    })
                );
            }
        }

        // ==========================================
        // VALIDATE SUPPORTED LANGUAGES
        // ==========================================

        const validLanguages = [
            "cpp",
            "java",
            "javascript",
            "python"
        ];

        if (supportedLanguages !== undefined) {
            if (
                supportedLanguages.length === 0 ||
                new Set(supportedLanguages).size !== supportedLanguages.length
            ) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "At least one supported language is required; duplicates are not allowed",
                        {}
                    )
                );
            }

            const invalidLanguages = supportedLanguages.filter(
                language => !validLanguages.includes(language)
            );

            if (invalidLanguages.length > 0) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "Please choose valid programming languages",
                        { invalidLanguages }
                    )
                );
            }
        }

        // Use the updated languages if supplied; otherwise, use existing ones.
        const languagesToValidate =
            supportedLanguages ?? problem.supportedLanguages;

        // ==========================================
        // VALIDATE STARTER CODE AND DRIVER CODE
        // ==========================================

        const validateLanguageCode = (code, fieldName) => {
            if (
                !code ||
                typeof code !== "object" ||
                Array.isArray(code)
            ) {
                return `${fieldName} must be an object`;
            }

            for (const language of languagesToValidate) {
                if (
                    typeof code[language] !== "string" ||
                    !code[language].trim()
                ) {
                    return `${fieldName} for ${language} is required`;
                }
            }

            return null;
        };

        if (starterCode !== undefined) {
            const starterCodeError = validateLanguageCode(
                starterCode,
                "Starter code"
            );

            if (starterCodeError) {
                return res.status(400).json(
                    new ApiError(400, starterCodeError, {})
                );
            }
        }

        // Backend-only driver code validation
        if (driverCode !== undefined) {
            const driverCodeError = validateLanguageCode(
                driverCode,
                "Driver code"
            );

            if (driverCodeError) {
                return res.status(400).json(
                    new ApiError(400, driverCodeError, {})
                );
            }
        }

        // If supported languages change, make sure existing code
        // templates are available for every newly supported language.
        for (const language of languagesToValidate) {
            const effectiveStarterCode =
                starterCode ?? problem.starterCode;

            const effectiveDriverCode =
                driverCode ?? problem.driverCode;

            if (
                !effectiveStarterCode ||
                typeof effectiveStarterCode[language] !== "string" ||
                !effectiveStarterCode[language].trim()
            ) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        `Starter code for ${language} is required`,
                        {}
                    )
                );
            }

            if (
                !effectiveDriverCode ||
                typeof effectiveDriverCode[language] !== "string" ||
                !effectiveDriverCode[language].trim()
            ) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        `Driver code for ${language} is required`,
                        {}
                    )
                );
            }
        }

        // ==========================================
        // VALIDATE EXAMPLES
        // ==========================================

        if (examples !== undefined) {
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
                            "Each example must contain string input and output",
                            {}
                        )
                    );
                }
            }
        }

        // ==========================================
        // VALIDATE TEST CASES
        // ==========================================

        if (testCases !== undefined) {
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
                            "Each test case must contain string input and expectedOutput",
                            {}
                        )
                    );
                }

                if (
                    testCase.isPublic !== undefined &&
                    typeof testCase.isPublic !== "boolean"
                ) {
                    return res.status(400).json(
                        new ApiError(
                            400,
                            "testCase.isPublic must be a boolean",
                            {}
                        )
                    );
                }
            }

            if (testCases.length === 0) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "At least one test case is required",
                        {}
                    )
                );
            }
        }

        // ==========================================
        // VALIDATE ORDER
        // ==========================================

        if (order !== undefined) {
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
        }

        // ==========================================
        // VALIDATE ACTIVE STATUS
        // ==========================================

        if (
            isActive !== undefined &&
            typeof isActive !== "boolean"
        ) {
            return res.status(400).json(
                new ApiError(400, "isActive must be a boolean", {})
            );
        }

        // ==========================================
        // CHECK NEW SLUG
        // ==========================================

        let formattedSlug;

        if (newSlug !== undefined) {
            if (typeof newSlug !== "string" || !newSlug.trim()) {
                return res.status(400).json(
                    new ApiError(400, "newSlug must be a non-empty string", {})
                );
            }

            formattedSlug = newSlug.toLowerCase().trim();

            const slugExists = await Problem.findOne({
                slug: formattedSlug,
                _id: { $ne: problem._id }
            });

            if (slugExists) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "Problem with this slug already exists",
                        {}
                    )
                );
            }
        }

        // ==========================================
        // CREATE UPDATE OBJECT
        // ==========================================

        const updateData = {};

        if (title !== undefined)
            updateData.title = title.trim();

        if (formattedSlug !== undefined)
            updateData.slug = formattedSlug;

        if (problemStatement !== undefined)
            updateData.problemStatement = problemStatement;

        if (topic !== undefined)
            updateData.topic = topic;

        if (subTopics !== undefined)
            updateData.subTopics = subTopics;

        if (tags !== undefined)
            updateData.tags = tags;

        if (pattern !== undefined)
            updateData.pattern = pattern;

        if (difficulty !== undefined)
            updateData.difficulty = difficulty;

        if (inputFormat !== undefined)
            updateData.inputFormat = inputFormat;

        if (outputFormat !== undefined)
            updateData.outputFormat = outputFormat;

        if (constraints !== undefined)
            updateData.constraints = constraints;

        if (examples !== undefined)
            updateData.examples = examples;

        if (starterCode !== undefined)
            updateData.starterCode = starterCode;

        // NEW: Update backend driver code
        if (driverCode !== undefined)
            updateData.driverCode = driverCode;

        if (testCases !== undefined)
            updateData.testCases = testCases;

        if (supportedLanguages !== undefined)
            updateData.supportedLanguages = supportedLanguages;

        if (expectedTimeComplexity !== undefined)
            updateData.expectedTimeComplexity = expectedTimeComplexity;

        if (expectedSpaceComplexity !== undefined)
            updateData.expectedSpaceComplexity = expectedSpaceComplexity;

        if (companies !== undefined)
            updateData.companies = companies;

        if (order !== undefined)
            updateData.order = order;

        if (isActive !== undefined)
            updateData.isActive = isActive;

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json(
                new ApiError(400, "No valid fields provided for update", {})
            );
        }

        // ==========================================
        // UPDATE PROBLEM
        // ==========================================

        const updatedProblem = await Problem.findByIdAndUpdate(
            problem._id,
            { $set: updateData },
            {
                new: true,
                runValidators: true
            }
        ).select("+driverCode");

        return res.status(200).json(
            new ApiResponse(
                200,
                "Problem updated successfully",
                updatedProblem
            )
        );

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "A problem with this slug already exists",
                    {}
                )
            );
        }

        console.error("UpdateProblem Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const GetProblem = async (req, res) => {
    try {
        const { slug } = req.params;

        if (!slug) {
            return res.status(400).json(
                new ApiError(400, "Problem slug is required", {})
            );
        }

        const problem = await Problem.findOne({
            slug: slug.toLowerCase().trim(),
            isActive: true
        }).select("-driverCode");

        if (!problem) {
            return res.status(404).json(
                new ApiError(404, "Problem not found", {})
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
        console.error("GetProblem Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const GetProblemsSheet = async (req, res) => {

    try {

        const studentId = GetStudentId(req);

        const problems = await Problem.find(
            { isActive: true },
            {
                title: 1,
                slug: 1,
                topic: 1,
                difficulty: 1,
                companies: 1,
                order: 1
            }
        )
            .sort({ order: 1 })
            .lean();

        const statusMap = new Map();

        console.log("Student ID:", studentId);

        if (studentId) {

            const solvedRecords = await Solved.find(
                { studentId },
                {
                    problemId: 1,
                    status: 1
                }
            ).lean();

            console.log("Solved Records:", solvedRecords);

            for (const record of solvedRecords) {

                statusMap.set(
                    record.problemId.toString(),
                    record.status
                );
            }
        }

        // Topic order
        const topicOrder = {
            INTRODUCTION: 1,
            BASICS: 2,
            CONDITIONALS: 3,
            LOOPS: 4,
            FUNCTIONS: 5,

            ARRAY: 6,
            STRING: 7,
            MATRIX: 8,

            TIME_SPACE_COMPLEXITY: 9,

            SEARCHING: 10,
            SORTING: 11,
            BINARY_SEARCH: 12,
            HASHING: 13,

            TWO_POINTER_SLIDING_WINDOW_PREFIX_SUM: 14,
            OOP: 15,


            LINKED_LIST: 16,

            STACK: 17,
            QUEUE: 18,
            DEQUE: 19,

            HEAP: 20,

            RECURSION: 21,
            BACKTRACKING: 22,

            TREE: 23,
            BINARY_SEARCH_TREE: 24,
            TRIE: 25,

            GREEDY: 26,
            DIVIDE_AND_CONQUER: 27,

            GRAPH: 28,

            DYNAMIC_PROGRAMMING: 29,

            BIT_MANIPULATION: 30,
            MATH: 31
        };

        // Difficulty order
        const difficultyOrder = {
            EASY: 1,
            MEDIUM: 2,
            HARD: 3
        };

        const groupedProblems = {};

        // Group problems by topic
        for (const problem of problems) {

            if (!groupedProblems[problem.topic]) {
                groupedProblems[problem.topic] = [];
            }

            groupedProblems[problem.topic].push({
                id: problem._id,
                title: problem.title,
                slug: problem.slug,
                difficulty: problem.difficulty,
                companies: problem.companies || [],

                status:
                    statusMap.get(problem._id.toString()) ||
                    "NOT_SOLVED",

                order: problem.order
            });
        }

        // Sort problems inside each topic
        // EASY -> MEDIUM -> HARD -> order
        for (const topic of Object.keys(groupedProblems)) {

            groupedProblems[topic].sort((a, b) => {

                const difficultyDifference =
                    difficultyOrder[a.difficulty] -
                    difficultyOrder[b.difficulty];

                if (difficultyDifference !== 0) {
                    return difficultyDifference;
                }

                return a.order - b.order;
            });
        }

        // Create final response in fixed topic order
        const orderedProblems = {};

        Object.keys(topicOrder).forEach((topic) => {

            if (groupedProblems[topic]) {
                orderedProblems[topic] =
                    groupedProblems[topic].map(
                        ({ order, ...problem }) => problem
                    );
            }

        });

        return res.status(200).json(
            new ApiResponse(
                200,
                "Problems sheet fetched successfully",
                orderedProblems
            )
        );

    } catch (error) {

        console.error("GetProblemsSheet Error:", error);

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                error.message
            )
        );
    }
};

const GetProblemByTopic = async (req, res) => {
    try {
        const { topic, difficulty } = req.query;

        const filter = {
            isActive: true
        };

        // Validate and apply topic filter
        if (topic) {
            const selectedTopic = topic.toUpperCase().trim();

            const validTopics = [
                "INTRODUCTION", "VARIABLES", "DATA_TYPES",
                "INPUT_OUTPUT", "OPERATORS", "CONDITIONALS",
                "LOOPS", "FUNCTIONS", "ARRAY", "STRING",
                "MATRIX", "TIME_SPACE_COMPLEXITY", "RECURSION",
                "OOP", "SEARCHING", "SORTING", "BINARY_SEARCH",
                "HASHING", "TWO_POINTER", "SLIDING_WINDOW",
                "PREFIX_SUM", "LINKED_LIST", "STACK", "QUEUE",
                "DEQUE", "BACKTRACKING", "HEAP", "TREE",
                "BINARY_SEARCH_TREE", "TRIE", "GREEDY",
                "DIVIDE_AND_CONQUER", "GRAPH",
                "DYNAMIC_PROGRAMMING", "BIT_MANIPULATION", "MATH"
            ];

            if (!validTopics.includes(selectedTopic)) {
                return res.status(400).json(
                    new ApiError(400, "Invalid topic", {})
                );
            }

            filter.topic = selectedTopic;
        }

        // Validate and apply difficulty filter
        if (difficulty) {
            const selectedDifficulty = difficulty.toUpperCase().trim();

            const validDifficulties = ["EASY", "MEDIUM", "HARD"];

            if (!validDifficulties.includes(selectedDifficulty)) {
                return res.status(400).json(
                    new ApiError(
                        400,
                        "Please provide a correct difficulty",
                        {}
                    )
                );
            }

            filter.difficulty = selectedDifficulty;
        }

        const problems = await Problem.aggregate([
            {
                $match: filter
            },
            {
                $addFields: {
                    difficultyOrder: {
                        $switch: {
                            branches: [
                                {
                                    case: { $eq: ["$difficulty", "EASY"] },
                                    then: 1
                                },
                                {
                                    case: { $eq: ["$difficulty", "MEDIUM"] },
                                    then: 2
                                },
                                {
                                    case: { $eq: ["$difficulty", "HARD"] },
                                    then: 3
                                }
                            ],
                            default: 4
                        }
                    }
                }
            },
            {
                $sort: {
                    difficultyOrder: 1,
                    order: 1
                }
            },
            {
                $project: {
                    driverCode: 0,
                    difficultyOrder: 0
                }
            }
        ]);

        return res.status(200).json(
            new ApiResponse(
                200,
                "Problems fetched successfully",
                problems
            )
        );

    } catch (error) {
        console.error("GetProblemByTopic Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const DeleteProblem = async (req, res) => {

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

        const problemDeleted = await Problem.deleteOne({
            slug: slug.toLowerCase().trim()
        });

        if (problemDeleted.deletedCount === 0) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Problem does not exist",
                    {}
                )
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Problem deleted successfully",
                {}
            )
        );

    }
    catch (error) {

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
    AddProblem,
    UpdateProblem,
    GetProblem,
    GetProblemsSheet,
    GetProblemByTopic,
    DeleteProblem
}