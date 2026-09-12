import mongoose from "mongoose";

// -------------------------
// Example Schema
// -------------------------
const exampleSchema = new mongoose.Schema(
    {
        input: {
            type: String,
            required: true
        },

        output: {
            type: String,
            required: true
        },

        explanation: {
            type: String,
            default: ""
        }
    },
    { _id: false }
);


// -------------------------
// Test Case Schema
// -------------------------
const testCaseSchema = new mongoose.Schema(
    {
        input: {
            type: String,
            required: true
        },

        expectedOutput: {
            type: String,
            required: true
        },

        isPublic: {
            type: Boolean,
            default: false
        }
    },
    { _id: false }
);


// -------------------------
// Starter Code Schema
// -------------------------
const starterCodeSchema = new mongoose.Schema(
    {
        cpp: {
            type: String,
            required: true
        },

        java: {
            type: String,
            required: true
        },

        javascript: {
            type: String,
            required: true
        },

        python: {
            type: String,
            required: true
        }
    },
    { _id: false }
);


// -------------------------
// Problem Schema
// -------------------------
const problemSchema = new mongoose.Schema(
    {
        // Basic Information
        title: {
            type: String,
            required: true,
            trim: true
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        problemStatement: {
            type: String,
            required: true
        },


        // DSA Classification
        topic: {
            type: String,
            enum: [
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
            ],
            required: true,
            index: true
        },

        subTopics: {
            type: [String],
            default: []
        },

        tags: {
            type: [String],
            default: []
        },

        pattern: {
            type: [String],
            enum: [
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
            ],
            default: []
        },

        difficulty: {
            type: String,
            enum: ["EASY", "MEDIUM", "HARD"],
            required: true,
            index: true
        },


        // Problem Details
        inputFormat: {
            type: String,
            default: ""
        },

        outputFormat: {
            type: String,
            default: ""
        },

        constraints: {
            type: [String],
            default: []
        },

        examples: {
            type: [exampleSchema],
            default: []
        },


        // Coding
        starterCode: {
            type: starterCodeSchema,
            required: true
        },

        testCases: {
            type: [testCaseSchema],
            default: []
        },

        supportedLanguages: {
            type: [String],
            enum: [
                "cpp",
                "java",
                "javascript",
                "python"
            ],
            default: [
                "cpp",
                "java",
                "javascript",
                "python"
            ]
        },


        // Learning Support
        keyConcepts: {
            type: [String],
            default: []
        },
        

        expectedTimeComplexity: {
            type: String,
            default: ""
        },

        expectedSpaceComplexity: {
            type: String,
            default: ""
        },


        // Execution Limits
        timeLimit: {
            type: Number,
            default: 2
        },

        memoryLimit: {
            type: Number,
            default: 256
        },


        // Placement Preparation
        


        // Ordering
        order: {
            type: Number,
            default: 0
        },


        // Problem Status
        isActive: {
            type: Boolean,
            default: true,
            index: true
        }
    },

    {
        timestamps: true
    }
);


// -------------------------
// Indexes
// -------------------------

problemSchema.index({
    topic: 1,
    difficulty: 1
});

problemSchema.index({
    topic: 1,
    order: 1
});




const Problem = mongoose.model("Problem", problemSchema);

export default Problem;