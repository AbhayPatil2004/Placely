import mongoose from "mongoose";

// ============================================================
// Example Schema
// ============================================================

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
    {
        _id: false
    }
);


// ============================================================
// Test Case Schema
// ============================================================

const testCaseSchema = new mongoose.Schema(
    {
        // Can be string, number, array, object, matrix, etc.
        input: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },

        // Can be string, number, array, object, etc.
        expectedOutput: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },

        isPublic: {
            type: Boolean,
            default: false
        }
    },
    {
        _id: false
    }
);


// ============================================================
// Starter Code Schema
// ============================================================

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
    {
        _id: false
    }
);


// ============================================================
// Driver Code Schema
// ============================================================

const driverCodeSchema = new mongoose.Schema(
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
    {
        _id: false
    }
);


// ============================================================
// Problem Schema
// ============================================================

const problemSchema = new mongoose.Schema(
    {
        // ========================================================
        // Basic Information
        // ========================================================

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


        // ========================================================
        // DSA Classification
        // ========================================================

        topic: {
            type: String,

            // enum: [
            //     // -------------------------
            //     // Programming Fundamentals
            //     // -------------------------
            //     "INTRODUCTION",
            //     "BASIC",
            //     "CONDITIONALS",
            //     "LOOPS",
            //     "FUNCTIONS",

            //     // -------------------------
            //     // Basic Data Structures
            //     // -------------------------
            //     "ARRAY",
            //     "STRING",
            //     "MATRIX",

            //     // -------------------------
            //     // Basic Algorithmic Concepts
            //     // -------------------------
            //     "TIME_SPACE_COMPLEXITY",

            //     // -------------------------
            //     // Searching & Sorting
            //     // -------------------------
            //     "SEARCHING",
            //     "SORTING",
            //     "BINARY_SEARCH",
            //     "HASHING",

            //     // -------------------------
            //     // Object Oriented Programming
            //     // -------------------------
            //     "OOP",

            //     // -------------------------
            //     // Array Patterns
            //     // -------------------------
            //     "TWO_POINTER_SLIDING_WINDOW_PREFIX_SUM",

            //     // -------------------------
            //     // Linked List
            //     // -------------------------
            //     "LINKED_LIST",

            //     // -------------------------
            //     // Stack / Queue
            //     // -------------------------
            //     "STACK",
            //     "QUEUE",
            //     "DEQUE",

            //     // -------------------------
            //     // Heap
            //     // -------------------------
            //     "HEAP",

            //     // -------------------------
            //     // Recursion / Backtracking
            //     // -------------------------
            //     "RECURSION",
            //     "BACKTRACKING",

            //     // -------------------------
            //     // Trees
            //     // -------------------------
            //     "TREE",
            //     "BINARY_SEARCH_TREE",
            //     "TRIE",

            //     // -------------------------
            //     // Greedy
            //     // -------------------------
            //     "GREEDY",

            //     // -------------------------
            //     // Divide and Conquer
            //     // -------------------------
            //     "DIVIDE_AND_CONQUER",

            //     // -------------------------
            //     // Graphs
            //     // -------------------------
            //     "GRAPH",

            //     // -------------------------
            //     // Dynamic Programming
            //     // -------------------------
            //     "DYNAMIC_PROGRAMMING",

            //     // -------------------------
            //     // Other
            //     // -------------------------
            //     "BIT_MANIPULATION",
            //     "MATH"
            // ],

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


        // ========================================================
        // Problem Pattern
        // ========================================================

        pattern: {
            type: [String],

            // enum: [
            //     "BASIC_CALCULATION",
            //     "BRUTE_FORCE",
            //     "HASHING",
            //     "TWO_POINTER",
            //     "SLIDING_WINDOW",
            //     "PREFIX_SUM",
            //     "BINARY_SEARCH",
            //     "SORTING",
            //     "FAST_SLOW_POINTER",
            //     "MONOTONIC_STACK",
            //     "STACK",
            //     "QUEUE",
            //     "HEAP",
            //     "GREEDY",
            //     "RECURSION",
            //     "BACKTRACKING",
            //     "DIVIDE_AND_CONQUER",
            //     "BIT_MANIPULATION",
            //     "GRAPH_TRAVERSAL",
            //     "BFS",
            //     "DFS",
            //     "TOPOLOGICAL_SORT",
            //     "UNION_FIND",
            //     "TRIE",
            //     "DYNAMIC_PROGRAMMING"
            // ],

            default: []
        },


        // ========================================================
        // Difficulty
        // ========================================================

        difficulty: {
            type: String,

            enum: [
                "BASIC" ,
                "EASY",
                "MEDIUM",
                "HARD"
            ],

            required: true,
            index: true
        },


        // ========================================================
        // Problem Details
        // ========================================================

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


        // ========================================================
        // Coding
        // ========================================================

        starterCode: {
            type: starterCodeSchema,
            required: true
        },

        driverCode: {
            type: driverCodeSchema,
            required: true,

            // Hidden from normal queries.
            // Admin/submission logic can explicitly select it.
            select: false
        },


        // ========================================================
        // Test Cases
        // ========================================================

        testCases: {
            type: [testCaseSchema],
            default: []
        },


        // ========================================================
        // Supported Languages
        // ========================================================

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


        // ========================================================
        // Expected Complexity
        // ========================================================

        expectedTimeComplexity: {
            type: String,
            default: ""
        },

        expectedSpaceComplexity: {
            type: String,
            default: ""
        },


        // ========================================================
        // Companies
        // ========================================================

        companies: {
            type: [String],
            default: []
        },


        // ========================================================
        // Ordering
        // ========================================================

        order: {
            type: Number,
            default: 0
        },


        // ========================================================
        // Problem Status
        // ========================================================

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


// ============================================================
// Indexes
// ============================================================

problemSchema.index({
    topic: 1,
    difficulty: 1
});

problemSchema.index({
    topic: 1,
    order: 1
});


// ============================================================
// Model
// ============================================================

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;