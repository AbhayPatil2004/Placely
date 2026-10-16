export default [
    {
  "title": "Binary Search",
  "slug": "binary-search",
  "problemStatement": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a sorted integer array nums and an integer target for each test case.",
  "outputFormat": "Return an integer representing the index of the target, or -1 if not found.",
  "constraints": [
    "1 <= nums.length <= 10^4",
    "-10^4 < nums[i], target < 10^4",
    "All the integers in nums are unique.",
    "nums is sorted in ascending order."
  ],
  "examples": [
    {
      "input": "nums = [-1, 0, 3, 5, 9, 12], target = 9",
      "output": "4"
    },
    {
      "input": "nums = [-1, 0, 3, 5, 9, 12], target = 2",
      "output": "-1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n        return -1;\n    }\n};",
    "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}",
    "javascript": "var search = function(nums, target) {\n    // Write your code here\n    return -1;\n};",
    "python": "class Solution:\n    def search(self, nums, target):\n        # Write your code here\n        return -1"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {-1, 0, 3, 5, 9, 12},\n        {-1, 0, 3, 5, 9, 12},\n        {5},\n        {2, 5},\n        {2, 5},\n        {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n        {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n        {-10, -3, 0, 5, 9},\n        {10, 20, 30, 40, 50},\n        {1, 3, 5, 7, 9}\n    };\n\n    vector<int> targets = {9, 2, 5, 5, 2, 7, 11, -3, 10, 4};\n\n    vector<int> expected = {\n        4,\n        -1,\n        0,\n        1,\n        0,\n        6,\n        -1,\n        1,\n        0,\n        -1\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = -1;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.search(numsCopy, targets[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"], \" + to_string(targets[i]) + \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {-1, 0, 3, 5, 9, 12},\n            {-1, 0, 3, 5, 9, 12},\n            {5},\n            {2, 5},\n            {2, 5},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n            {-10, -3, 0, 5, 9},\n            {10, 20, 30, 40, 50},\n            {1, 3, 5, 7, 9}\n        };\n\n        int[] targets = {9, 2, 5, 5, 2, 7, 11, -3, 10, 4};\n\n        int[] expected = {\n            4,\n            -1,\n            0,\n            1,\n            0,\n            6,\n            -1,\n            1,\n            0,\n            -1\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = -1;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.search(numsCopy, targets[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], \").append(targets[i]).append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },\n    { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },\n    { nums: [5], target: 5, expected: 0 },\n    { nums: [2, 5], target: 5, expected: 1 },\n    { nums: [2, 5], target: 2, expected: 0 },\n    { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 7, expected: 6 },\n    { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 11, expected: -1 },\n    { nums: [-10, -3, 0, 5, 9], target: -3, expected: 1 },\n    { nums: [10, 20, 30, 40, 50], target: 10, expected: 0 },\n    { nums: [1, 3, 5, 7, 9], target: 4, expected: -1 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, target, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = -1;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = search(numsCopy, target);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums, target],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([-1, 0, 3, 5, 9, 12], 9, 4),\n    ([-1, 0, 3, 5, 9, 12], 2, -1),\n    ([5], 5, 0),\n    ([2, 5], 5, 1),\n    ([2, 5], 2, 0),\n    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 6),\n    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, -1),\n    ([-10, -3, 0, 5, 9], -3, 1),\n    ([10, 20, 30, 40, 50], 10, 0),\n    ([1, 3, 5, 7, 9], 4, -1)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    target = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = -1\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.search(nums, target)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], target],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[-1, 0, 3, 5, 9, 12], 9],
      "expectedOutput": 4,
      "isPublic": true
    },
    {
      "input": [[-1, 0, 3, 5, 9, 12], 2],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [[5], 5],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [[2, 5], 5],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [[2, 5], 2],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7],
      "expectedOutput": 6,
      "isPublic": false
    },
    {
      "input": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11],
      "expectedOutput": -1,
      "isPublic": false
    },
    {
      "input": [[-10, -3, 0, 5, 9], -3],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [[10, 20, 30, 40, 50], 10],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [[1, 3, 5, 7, 9], 4],
      "expectedOutput": -1,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 1
},
{
  "title": "Lower Bound",
  "slug": "lower-bound",
  "problemStatement": "Given a sorted array of integers nums and an integer x, find the index of the lower bound of x. The lower bound of x is the smallest index i such that nums[i] >= x. If all elements in the array are less than x, return the length of the array.",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a sorted integer array nums and an integer x for each test case.",
  "outputFormat": "Return an integer representing the lower bound index.",
  "constraints": [
    "1 <= nums.length <= 10^4",
    "-10^4 <= nums[i], x <= 10^4",
    "nums is sorted in non-decreasing order."
  ],
  "examples": [
    {
      "input": "nums = [1, 2, 3, 3, 5, 8, 8, 10, 10, 11], x = 8",
      "output": "5"
    },
    {
      "input": "nums = [1, 2, 2, 3], x = 2",
      "output": "1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int lowerBound(vector<int>& nums, int x) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int lowerBound(int[] nums, int x) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var lowerBound = function(nums, x) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def lowerBound(self, nums, x):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {1, 2, 3, 3, 5, 8, 8, 10, 10, 11},\n        {1, 2, 2, 3},\n        {1, 2, 4, 5},\n        {10, 20, 30, 40, 50},\n        {5},\n        {2, 3, 5, 7, 8},\n        {1, 2, 3, 4, 5},\n        {2, 2, 2, 2},\n        {1, 3, 5, 7},\n        {1, 2, 3, 4}\n    };\n\n    vector<int> targets = {8, 2, 3, 25, 5, 4, 6, 2, 6, 5};\n\n    vector<int> expected = {\n        5,\n        1,\n        2,\n        1,\n        0,\n        2,\n        5,\n        0,\n        3,\n        4\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.lowerBound(numsCopy, targets[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"], \" + to_string(targets[i]) + \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {1, 2, 3, 3, 5, 8, 8, 10, 10, 11},\n            {1, 2, 2, 3},\n            {1, 2, 4, 5},\n            {10, 20, 30, 40, 50},\n            {5},\n            {2, 3, 5, 7, 8},\n            {1, 2, 3, 4, 5},\n            {2, 2, 2, 2},\n            {1, 3, 5, 7},\n            {1, 2, 3, 4}\n        };\n\n        int[] targets = {8, 2, 3, 25, 5, 4, 6, 2, 6, 5};\n\n        int[] expected = {\n            5,\n            1,\n            2,\n            1,\n            0,\n            2,\n            5,\n            0,\n            3,\n            4\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.lowerBound(numsCopy, targets[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], \").append(targets[i]).append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [1, 2, 3, 3, 5, 8, 8, 10, 10, 11], target: 8, expected: 5 },\n    { nums: [1, 2, 2, 3], target: 2, expected: 1 },\n    { nums: [1, 2, 4, 5], target: 3, expected: 2 },\n    { nums: [10, 20, 30, 40, 50], target: 25, expected: 2 },\n    { nums: [5], target: 5, expected: 0 },\n    { nums: [2, 3, 5, 7, 8], target: 4, expected: 2 },\n    { nums: [1, 2, 3, 4, 5], target: 6, expected: 5 },\n    { nums: [2, 2, 2, 2], target: 2, expected: 0 },\n    { nums: [1, 3, 5, 7], target: 6, expected: 3 },\n    { nums: [1, 2, 3, 4], target: 5, expected: 4 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, target, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = lowerBound(numsCopy, target);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums, target],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 8, 5),\n    ([1, 2, 2, 3], 2, 1),\n    ([1, 2, 4, 5], 3, 2),\n    ([10, 20, 30, 40, 50], 25, 2),\n    ([5], 5, 0),\n    ([2, 3, 5, 7, 8], 4, 2),\n    ([1, 2, 3, 4, 5], 6, 5),\n    ([2, 2, 2, 2], 2, 0),\n    ([1, 3, 5, 7], 6, 3),\n    ([1, 2, 3, 4], 5, 4)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    target = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.lowerBound(nums, target)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], target],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 8],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": [[1, 2, 2, 3], 2],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [[1, 2, 4, 5], 3],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [[10, 20, 30, 40, 50], 25],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [[5], 5],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [[2, 3, 5, 7, 8], 4],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [[1, 2, 3, 4, 5], 6],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [[2, 2, 2, 2], 2],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [[1, 3, 5, 7], 6],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [[1, 2, 3, 4], 5],
      "expectedOutput": 4,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 2
 },
 {
  "title": "Upper Bound",
  "slug": "upper-bound",
  "problemStatement": "Given a sorted array of integers nums and an integer x, find the index of the upper bound of x. The upper bound of x is the smallest index i such that nums[i] > x. If all elements in the array are less than or equal to x, return the length of the array.",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a sorted integer array nums and an integer x for each test case.",
  "outputFormat": "Return an integer representing the upper bound index.",
  "constraints": [
    "1 <= nums.length <= 10^4",
    "-10^4 <= nums[i], x <= 10^4",
    "nums is sorted in non-decreasing order."
  ],
  "examples": [
    {
      "input": "nums = [1, 2, 3, 3, 5, 8, 8, 10, 10, 11], x = 8",
      "output": "7"
    },
    {
      "input": "nums = [1, 2, 2, 3], x = 2",
      "output": "3"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int upperBound(vector<int>& nums, int x) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int upperBound(int[] nums, int x) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var upperBound = function(nums, x) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def upperBound(self, nums, x):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {1, 2, 3, 3, 5, 8, 8, 10, 10, 11},\n        {1, 2, 2, 3},\n        {1, 2, 4, 5},\n        {10, 20, 30, 40, 50},\n        {5},\n        {2, 3, 5, 7, 8},\n        {1, 2, 3, 4, 5},\n        {2, 2, 2, 2},\n        {1, 3, 5, 7},\n        {1, 2, 3, 4}\n    };\n\n    vector<int> targets = {8, 2, 3, 25, 5, 4, 6, 2, 6, 5};\n\n    vector<int> expected = {\n        7,\n        3,\n        2,\n        2,\n        1,\n        2,\n        5,\n        4,\n        3,\n        4\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.upperBound(numsCopy, targets[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"], \" + to_string(targets[i]) + \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {1, 2, 3, 3, 5, 8, 8, 10, 10, 11},\n            {1, 2, 2, 3},\n            {1, 2, 4, 5},\n            {10, 20, 30, 40, 50},\n            {5},\n            {2, 3, 5, 7, 8},\n            {1, 2, 3, 4, 5},\n            {2, 2, 2, 2},\n            {1, 3, 5, 7},\n            {1, 2, 3, 4}\n        };\n\n        int[] targets = {8, 2, 3, 25, 5, 4, 6, 2, 6, 5};\n\n        int[] expected = {\n            7,\n            3,\n            2,\n            2,\n            1,\n            2,\n            5,\n            4,\n            3,\n            4\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.upperBound(numsCopy, targets[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], \").append(targets[i]).append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [1, 2, 3, 3, 5, 8, 8, 10, 10, 11], target: 8, expected: 7 },\n    { nums: [1, 2, 2, 3], target: 2, expected: 3 },\n    { nums: [1, 2, 4, 5], target: 3, expected: 2 },\n    { nums: [10, 20, 30, 40, 50], target: 25, expected: 2 },\n    { nums: [5], target: 5, expected: 1 },\n    { nums: [2, 3, 5, 7, 8], target: 4, expected: 2 },\n    { nums: [1, 2, 3, 4, 5], target: 6, expected: 5 },\n    { nums: [2, 2, 2, 2], target: 2, expected: 4 },\n    { nums: [1, 3, 5, 7], target: 6, expected: 3 },\n    { nums: [1, 2, 3, 4], target: 5, expected: 4 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, target, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = upperBound(numsCopy, target);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums, target],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 8, 7),\n    ([1, 2, 2, 3], 2, 3),\n    ([1, 2, 4, 5], 3, 2),\n    ([10, 20, 30, 40, 50], 25, 2),\n    ([5], 5, 1),\n    ([2, 3, 5, 7, 8], 4, 2),\n    ([1, 2, 3, 4, 5], 6, 5),\n    ([2, 2, 2, 2], 2, 4),\n    ([1, 3, 5, 7], 6, 3),\n    ([1, 2, 3, 4], 5, 4)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    target = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.upperBound(nums, target)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], target],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 8],
      "expectedOutput": 7,
      "isPublic": true
    },
    {
      "input": [[1, 2, 2, 3], 2],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": [[1, 2, 4, 5], 3],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [[10, 20, 30, 40, 50], 25],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [[5], 5],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [[2, 3, 5, 7, 8], 4],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [[1, 2, 3, 4, 5], 6],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [[2, 2, 2, 2], 2],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [[1, 3, 5, 7], 6],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [[1, 2, 3, 4], 5],
      "expectedOutput": 4,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 3
},
    {
  "title": "Search in Rotated Sorted Array",
  "slug": "search-in-rotated-sorted-array",
  "problemStatement": "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a rotated sorted integer array nums and an integer target for each test case.",
  "outputFormat": "Return an integer representing the index of the target, or -1 if not found.",
  "constraints": [
    "1 <= nums.length <= 5000",
    "-10^4 <= nums[i] <= 10^4",
    "All values of nums are unique.",
    "nums is an ascending array that is possibly rotated.",
    "-10^4 <= target <= 10^4"
  ],
  "examples": [
    {
      "input": "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
      "output": "4"
    },
    {
      "input": "nums = [4, 5, 6, 7, 0, 1, 2], target = 3",
      "output": "-1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n        return -1;\n    }\n};",
    "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}",
    "javascript": "var search = function(nums, target) {\n    // Write your code here\n    return -1;\n};",
    "python": "class Solution:\n    def search(self, nums, target):\n        # Write your code here\n        return -1"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {4, 5, 6, 7, 0, 1, 2},\n        {4, 5, 6, 7, 0, 1, 2},\n        {1},\n        {1},\n        {3, 1},\n        {5, 1, 3},\n        {5, 1, 3},\n        {6, 7, 1, 2, 3, 4, 5},\n        {2, 3, 4, 5, 1},\n        {4, 5, 6, 7, 8, 1, 2, 3}\n    };\n\n    vector<int> targets = {0, 3, 0, 1, 1, 5, 3, 6, 1, 8};\n\n    vector<int> expected = {\n        4,\n        -1,\n        -1,\n        0,\n        1,\n        0,\n        2,\n        0,\n        4,\n        4\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = -1;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.search(numsCopy, targets[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"], \" + to_string(targets[i]) + \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {4, 5, 6, 7, 0, 1, 2},\n            {4, 5, 6, 7, 0, 1, 2},\n            {1},\n            {1},\n            {3, 1},\n            {5, 1, 3},\n            {5, 1, 3},\n            {6, 7, 1, 2, 3, 4, 5},\n            {2, 3, 4, 5, 1},\n            {4, 5, 6, 7, 8, 1, 2, 3}\n        };\n\n        int[] targets = {0, 3, 0, 1, 1, 5, 3, 6, 1, 8};\n\n        int[] expected = {\n            4,\n            -1,\n            -1,\n            0,\n            1,\n            0,\n            2,\n            0,\n            4,\n            4\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = -1;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.search(numsCopy, targets[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], \").append(targets[i]).append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },\n    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },\n    { nums: [1], target: 0, expected: -1 },\n    { nums: [1], target: 1, expected: 0 },\n    { nums: [3, 1], target: 1, expected: 1 },\n    { nums: [5, 1, 3], target: 5, expected: 0 },\n    { nums: [5, 1, 3], target: 3, expected: 2 },\n    { nums: [6, 7, 1, 2, 3, 4, 5], target: 6, expected: 0 },\n    { nums: [2, 3, 4, 5, 1], target: 1, expected: 4 },\n    { nums: [4, 5, 6, 7, 8, 1, 2, 3], target: 8, expected: 4 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, target, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = -1;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = search(numsCopy, target);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums, target],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([4, 5, 6, 7, 0, 1, 2], 0, 4),\n    ([4, 5, 6, 7, 0, 1, 2], 3, -1),\n    ([1], 0, -1),\n    ([1], 1, 0),\n    ([3, 1], 1, 1),\n    ([5, 1, 3], 5, 0),\n    ([5, 1, 3], 3, 2),\n    ([6, 7, 1, 2, 3, 4, 5], 6, 0),\n    ([2, 3, 4, 5, 1], 1, 4),\n    ([4, 5, 6, 7, 8, 1, 2, 3], 8, 4)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    target = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = -1\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.search(nums, target)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], target],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[4, 5, 6, 7, 0, 1, 2], 0],
      "expectedOutput": 4,
      "isPublic": true
    },
    {
      "input": [[4, 5, 6, 7, 0, 1, 2], 3],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [[1], 0],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [[1], 1],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [[3, 1], 1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [[5, 1, 3], 5],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [[5, 1, 3], 3],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [[6, 7, 1, 2, 3, 4, 5], 6],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [[2, 3, 4, 5, 1], 1],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [[4, 5, 6, 7, 8, 1, 2, 3], 8],
      "expectedOutput": 4,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [ "TCS", "Infosys"],
  "order": 4
},
{
  "title": "Find Minimum in Rotated Sorted Array",
  "slug": "find-minimum-in-rotated-sorted-array",
  "problemStatement": "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides a rotated sorted integer array nums for each test case.",
  "outputFormat": "Return an integer representing the minimum element in the array.",
  "constraints": [
    "1 <= nums.length <= 5000",
    "-10^4 <= nums[i] <= 10^4",
    "All the integers of nums are unique.",
    "nums is sorted and rotated between 1 and n times."
  ],
  "examples": [
    {
      "input": "nums = [3, 4, 5, 1, 2]",
      "output": "1"
    },
    {
      "input": "nums = [4, 5, 6, 7, 0, 1, 2]",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int findMin(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var findMin = function(nums) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def findMin(self, nums):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {3, 4, 5, 1, 2},\n        {4, 5, 6, 7, 0, 1, 2},\n        {11, 13, 15, 17},\n        {2, 1},\n        {1},\n        {3, 1, 2},\n        {4, 5, 1, 2, 3},\n        {5, 1, 2, 3, 4},\n        {2, 3, 4, 5, 1},\n        {6, 7, 1, 2, 3, 4, 5}\n    };\n\n    vector<int> expected = {\n        1,\n        0,\n        11,\n        1,\n        1,\n        1,\n        1,\n        1,\n        1,\n        1\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.findMin(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {3, 4, 5, 1, 2},\n            {4, 5, 6, 7, 0, 1, 2},\n            {11, 13, 15, 17},\n            {2, 1},\n            {1},\n            {3, 1, 2},\n            {4, 5, 1, 2, 3},\n            {5, 1, 2, 3, 4},\n            {2, 3, 4, 5, 1},\n            {6, 7, 1, 2, 3, 4, 5}\n        };\n\n        int[] expected = {\n            1,\n            0,\n            11,\n            1,\n            1,\n            1,\n            1,\n            1,\n            1,\n            1\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findMin(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [3, 4, 5, 1, 2], expected: 1 },\n    { nums: [4, 5, 6, 7, 0, 1, 2], expected: 0 },\n    { nums: [11, 13, 15, 17], expected: 11 },\n    { nums: [2, 1], expected: 1 },\n    { nums: [1], expected: 1 },\n    { nums: [3, 1, 2], expected: 1 },\n    { nums: [4, 5, 1, 2, 3], expected: 1 },\n    { nums: [5, 1, 2, 3, 4], expected: 1 },\n    { nums: [2, 3, 4, 5, 1], expected: 1 },\n    { nums: [6, 7, 1, 2, 3, 4, 5], expected: 1 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findMin(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([3, 4, 5, 1, 2], 1),\n    ([4, 5, 6, 7, 0, 1, 2], 0),\n    ([11, 13, 15, 17], 11),\n    ([2, 1], 1),\n    ([1], 1),\n    ([3, 1, 2], 1),\n    ([4, 5, 1, 2, 3], 1),\n    ([5, 1, 2, 3, 4], 1),\n    ([2, 3, 4, 5, 1], 1),\n    ([6, 7, 1, 2, 3, 4, 5], 1)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findMin(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [3, 4, 5, 1, 2],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [4, 5, 6, 7, 0, 1, 2],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [11, 13, 15, 17],
      "expectedOutput": 11,
      "isPublic": true
    },
    {
      "input": [2, 1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [3, 1, 2],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [4, 5, 1, 2, 3],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [5, 1, 2, 3, 4],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [2, 3, 4, 5, 1],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [6, 7, 1, 2, 3, 4, 5],
      "expectedOutput": 1,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 5
    },
    {
  "title": "Median of Two Sorted Arrays",
  "slug": "median-of-two-sorted-arrays",
  "problemStatement": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search", "divide-and-conquer"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "HARD",
  "inputFormat": "The driver provides two sorted integer arrays nums1 and nums2 for each test case.",
  "outputFormat": "Return a double representing the median of the two sorted arrays.",
  "constraints": [
    "nums1.length == m",
    "nums2.length == n",
    "0 <= m <= 1000",
    "0 <= n <= 1000",
    "1 <= m + n <= 2000",
    "-10^6 <= nums1[i], nums2[i] <= 10^6"
  ],
  "examples": [
    {
      "input": "nums1 = [1, 3], nums2 = [2]",
      "output": "2.00000"
    },
    {
      "input": "nums1 = [1, 2], nums2 = [3, 4]",
      "output": "2.50000"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n        return 0.0;\n    }\n};",
    "java": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return 0.0;\n    }\n}",
    "javascript": "var findMedianSortedArrays = function(nums1, nums2) {\n    // Write your code here\n    return 0.0;\n};",
    "python": "class Solution:\n    def findMedianSortedArrays(self, nums1, nums2):\n        # Write your code here\n        return 0.0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs1 = {\n        {1, 3},\n        {1, 2},\n        {0, 0},\n        {},\n        {2},\n        {1, 2, 3},\n        {1, 3, 8, 9, 15},\n        {1, 2},\n        {3},\n        {2, 3, 4}\n    };\n\n    vector<vector<int>> inputs2 = {\n        {2},\n        {3, 4},\n        {0, 0},\n        {1},\n        {},\n        {4, 5, 6},\n        {7, 11, 18, 19, 21, 25},\n        {3, 4},\n        {1, 2, 4},\n        {1}\n    };\n\n    vector<double> expected = {\n        2.0,\n        2.5,\n        0.0,\n        1.0,\n        2.0,\n        3.5,\n        11.0,\n        2.5,\n        2.0,\n        2.5\n    };\n\n    int totalTestCases = inputs1.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> copy1 = inputs1[i];\n        vector<int> copy2 = inputs2[i];\n        double actual = 0.0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.findMedianSortedArrays(copy1, copy2);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && abs(actual - expected[i]) < 1e-5;\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs1[i].size(); j++) {\n            input += to_string(inputs1[i][j]);\n            if(j + 1 < inputs1[i].size())\n                input += \", \";\n        }\n        input += \"], [\";\n        for(int j = 0; j < inputs2[i].size(); j++) {\n            input += to_string(inputs2[i][j]);\n            if(j + 1 < inputs2[i].size())\n                input += \", \";\n        }\n        input += \"]]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs1 = {\n            {1, 3},\n            {1, 2},\n            {0, 0},\n            {},\n            {2},\n            {1, 2, 3},\n            {1, 3, 8, 9, 15},\n            {1, 2},\n            {3},\n            {2, 3, 4}\n        };\n\n        int[][] inputs2 = {\n            {2},\n            {3, 4},\n            {0, 0},\n            {1},\n            {},\n            {4, 5, 6},\n            {7, 11, 18, 19, 21, 25},\n            {3, 4},\n            {1, 2, 4},\n            {1}\n        };\n\n        double[] expected = {\n            2.0,\n            2.5,\n            0.0,\n            1.0,\n            2.0,\n            3.5,\n            11.0,\n            2.5,\n            2.0,\n            2.5\n        };\n\n        int totalTestCases = inputs1.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] copy1 = inputs1[i].clone();\n            int[] copy2 = inputs2[i].clone();\n            double actual = 0.0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findMedianSortedArrays(copy1, copy2);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && Math.abs(actual - expected[i]) < 1e-5;\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs1[i].length; j++) {\n                input.append(inputs1[i][j]);\n                if(j + 1 < inputs1[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], [\");\n            for(int j = 0; j < inputs2[i].length; j++) {\n                input.append(inputs2[i][j]);\n                if(j + 1 < inputs2[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums1: [1, 3], nums2: [2], expected: 2.0 },\n    { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },\n    { nums1: [0, 0], nums2: [0, 0], expected: 0.0 },\n    { nums1: [], nums2: [1], expected: 1.0 },\n    { nums1: [2], nums2: [], expected: 2.0 },\n    { nums1: [1, 2, 3], nums2: [4, 5, 6], expected: 3.5 },\n    { nums1: [1, 3, 8, 9, 15], nums2: [7, 11, 18, 19, 21, 25], expected: 11.0 },\n    { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },\n    { nums1: [3], nums2: [1, 2, 4], expected: 2.0 },\n    { nums1: [2, 3, 4], nums2: [1], expected: 2.5 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums1, nums2, expected } = testCases[i];\n    const copy1 = [...nums1];\n    const copy2 = [...nums2];\n\n    let actual = 0.0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findMedianSortedArrays(copy1, copy2);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && Math.abs(actual - expected) < 1e-5;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums1, nums2],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 3], [2], 2.0),\n    ([1, 2], [3, 4], 2.5),\n    ([0, 0], [0, 0], 0.0),\n    ([], [1], 1.0),\n    ([2], [], 2.0),\n    ([1, 2, 3], [4, 5, 6], 3.5),\n    ([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25], 11.0),\n    ([1, 2], [3, 4], 2.5),\n    ([3], [1, 2, 4], 2.0),\n    ([2, 3, 4], [1], 2.5)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums1 = list(test_cases[i][0])\n    nums2 = list(test_cases[i][1])\n    expected = test_cases[i][2]\n\n    actual = 0.0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findMedianSortedArrays(nums1, nums2)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and abs(actual - expected) < 1e-5\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], test_cases[i][1]],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[1, 3], [2]],
      "expectedOutput": 2.0,
      "isPublic": true
    },
    {
      "input": [[1, 2], [3, 4]],
      "expectedOutput": 2.5,
      "isPublic": true
    },
    {
      "input": [[0, 0], [0, 0]],
      "expectedOutput": 0.0,
      "isPublic": true
    },
    {
      "input": [[], [1]],
      "expectedOutput": 1.0,
      "isPublic": true
    },
    {
      "input": [[2], []],
      "expectedOutput": 2.0,
      "isPublic": true
    },
    {
      "input": [[1, 2, 3], [4, 5, 6]],
      "expectedOutput": 3.5,
      "isPublic": false
    },
    {
      "input": [[1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]],
      "expectedOutput": 11.0,
      "isPublic": false
    },
    {
      "input": [[1, 2], [3, 4]],
      "expectedOutput": 2.5,
      "isPublic": false
    },
    {
      "input": [[3], [1, 2, 4]],
      "expectedOutput": 2.0,
      "isPublic": false
    },
    {
      "input": [[2, 3, 4], [1]],
      "expectedOutput": 2.5,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log(min(m, n)))",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 8
 },
{
  "title": "Search in a 2D Matrix",
  "slug": "search-in-a-2d-matrix",
  "problemStatement": "You are given an m x n integer matrix matrix with the following two properties: Each row is sorted in non-decreasing order. The first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if target is in matrix or false otherwise. You must write a solution in O(log(m * n)) time complexity.",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search", "matrix"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides a 2D integer matrix matrix and an integer target for each test case.",
  "outputFormat": "Return a boolean value (true or false) indicating whether the target exists in the matrix.",
  "constraints": [
    "m == matrix.length",
    "n == matrix[i].length",
    "1 <= m, n <= 100",
    "-10^4 <= matrix[i][j], target <= 10^4"
  ],
  "examples": [
    {
      "input": "matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3",
      "output": "true"
    },
    {
      "input": "matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13",
      "output": "false"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var searchMatrix = function(matrix, target) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def searchMatrix(self, matrix, target):\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n\n    vector<vector<vector<int>>> inputs = {\n        {{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},\n        {{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},\n        {{1}},\n        {{1}},\n        {{1, 3}},\n        {{1, 3}},\n        {{1}, {3}, {5}},\n        {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}},\n        {{2, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},\n        {{-5}}\n    };\n\n    vector<int> targets = {3, 13, 1, 2, 3, 0, 3, 5, 11, -5};\n\n    vector<bool> expected = {\n        true,\n        false,\n        true,\n        false,\n        true,\n        false,\n        true,\n        true,\n        true,\n        true\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<vector<int>> matrixCopy = inputs[i];\n        bool actual = false;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.searchMatrix(matrixCopy, targets[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int r = 0; r < inputs[i].size(); r++) {\n            input += \"[\";\n            for(int c = 0; c < inputs[i][r].size(); c++) {\n                input += to_string(inputs[i][r][c]);\n                if(c + 1 < inputs[i][r].size()) input += \", \";\n            }\n            input += \"]\";\n            if(r + 1 < inputs[i].size()) input += \", \";\n        }\n        input += \"], \" + to_string(targets[i]) + \"]\";\n\n        string expectedOutput = expected[i] ? \"true\" : \"false\";\n        string actualOutput = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][][] inputs = {\n            {{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},\n            {{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},\n            {{1}},\n            {{1}},\n            {{1, 3}},\n            {{1, 3}},\n            {{1}, {3}, {5}},\n            {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}},\n            {{2, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},\n            {{-5}}\n        };\n\n        int[] targets = {3, 13, 1, 2, 3, 0, 3, 5, 11, -5};\n\n        boolean[] expected = {\n            true,\n            false,\n            true,\n            false,\n            true,\n            false,\n            true,\n            true,\n            true,\n            true\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[][] matrixCopy = new int[inputs[i].length][];\n            for(int r = 0; r < inputs[i].length; r++) {\n                matrixCopy[r] = inputs[i][r].clone();\n            }\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.searchMatrix(matrixCopy, targets[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int r = 0; r < inputs[i].length; r++) {\n                input.append(\"[\");\n                for(int c = 0; c < inputs[i][r].length; c++) {\n                    input.append(inputs[i][r][c]);\n                    if(c + 1 < inputs[i][r].length) input.append(\", \");\n                }\n                input.append(\"]\");\n                if(r + 1 < inputs[i].length) input.append(\", \");\n            }\n            input.append(\"], \").append(targets[i]).append(\"]\");\n\n            String expectedOutput = expected[i] ? \"true\" : \"false\";\n            String actualOutput = actual ? \"true\" : \"false\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 3, expected: true },\n    { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 13, expected: false },\n    { matrix: [[1]], target: 1, expected: true },\n    { matrix: [[1]], target: 2, expected: false },\n    { matrix: [[1, 3]], target: 3, expected: true },\n    { matrix: [[1, 3]], target: 0, expected: false },\n    { matrix: [[1], [3], [5]], target: 3, expected: true },\n    { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target: 5, expected: true },\n    { matrix: [[2, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 11, expected: true },\n    { matrix: [[-5]], target: -5, expected: true }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { matrix, target, expected } = testCases[i];\n    const matrixCopy = matrix.map(row => [...row]);\n\n    let actual = false;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = searchMatrix(matrixCopy, target);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [matrix, target],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "import sys\n\ntest_cases = [\n    ([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3, True),\n    ([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13, False),\n    ([[1]], 1, True),\n    ([[1]], 2, False),\n    ([[1, 3]], 3, True),\n    ([[1, 3]], 0, False),\n    ([[1], [3], [5]], 3, True),\n    ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5, True),\n    ([[2, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 11, True),\n    ([[-5]], -5, True)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    matrix = [list(row) for row in test_cases[i][0]]\n    target = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = False\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.searchMatrix(matrix, target)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], target],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [[[1]], 1],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [[[1]], 2],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [[[1, 3]], 3],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [[[1, 3]], 0],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [[[1], [3], [5]], 3],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [[[2, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 11],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [[[-5]], -5],
      "expectedOutput": true,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log(M * N))",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 7
 },

 {
  "title": "Find Peak Element",
  "slug": "find-peak-element",
  "problemStatement": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -infinity. You must write an algorithm that runs in O(log n) time.",
  "topic": "BINARY_SEARCH",
  "subTopics": [],
  "tags": ["array", "binary-search"],
  "pattern": ["BINARY_SEARCH"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides an integer array nums for each test case.",
  "outputFormat": "Return an integer representing the index of any peak element.",
  "constraints": [
    "1 <= nums.length <= 1000",
    "-2^31 <= nums[i] <= 2^31 - 1",
    "nums[i] != nums[i + 1] for all valid i."
  ],
  "examples": [
    {
      "input": "nums = [1, 2, 3, 1]",
      "output": "2"
    },
    {
      "input": "nums = [1, 2, 1, 3, 5, 6, 4]",
      "output": "5"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int findPeakElement(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int findPeakElement(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var findPeakElement = function(nums) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def findPeakElement(self, nums):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "bool checkPeak(const vector<int>& nums, int idx) {\n    int n = nums.size();\n    if (idx < 0 || idx >= n) return false;\n    long long leftVal = (idx == 0) ? -2147483649LL : nums[idx - 1];\n    long long rightVal = (idx == n - 1) ? -2147483649LL : nums[idx + 1];\n    return nums[idx] > leftVal && nums[idx] > rightVal;\n}\n\nint main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {1, 2, 3, 1},\n        {1, 2, 1, 3, 5, 6, 4},\n        {1},\n        {1, 2},\n        {2, 1},\n        {1, 2, 3},\n        {3, 2, 1},\n        {1, 2, 3, 1, 2, 1},\n        {-2, -1,\n        {-10, -5, -2, 0}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.findPeakElement(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && checkPeak(inputs[i], actual);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \\\"Valid peak index\\\",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n    private static boolean checkPeak(int[] nums, int idx) {\n        int n = nums.length;\n        if (idx < 0 || idx >= n) return false;\n        long leftVal = (idx == 0) ? -2147483649L : nums[idx - 1];\n        long rightVal = (idx == n - 1) ? -2147483649L : nums[idx + 1];\n        return nums[idx] > leftVal && nums[idx] > rightVal;\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {1, 2, 3, 1},\n            {1, 2, 1, 3, 5, 6, 4},\n            {1},\n            {1, 2},\n            {2, 1},\n            {1, 2, 3},\n            {3, 2, 1},\n            {1, 2, 3, 1, 2, 1},\n            {-2, -1},\n            {-10, -5, -2, 0}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findPeakElement(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && checkPeak(inputs[i], actual);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \\\"Valid peak index\\\",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "function checkPeak(nums, idx) {\n    const n = nums.length;\n    if (idx < 0 || idx >= n) return false;\n    const leftVal = (idx === 0) ? -Infinity : nums[idx - 1];\n    const rightVal = (idx === n - 1) ? -Infinity : nums[idx + 1];\n    return nums[idx] > leftVal && nums[idx] > rightVal;\n}\n\nconst testCases = [\n    { nums: [1, 2, 3, 1] },\n    { nums: [1, 2, 1, 3, 5, 6, 4] },\n    { nums: [1] },\n    { nums: [1, 2] },\n    { nums: [2, 1] },\n    { nums: [1, 2, 3] },\n    { nums: [3, 2, 1] },\n    { nums: [1, 2, 3, 1, 2, 1] },\n    { nums: [-2, -1] },\n    { nums: [-10, -5, -2, 0] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findPeakElement(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && checkPeak(nums, actual);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: \"Valid peak index\",\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "def check_peak(nums, idx):\n    n = len(nums)\n    if idx < 0 or idx >= n:\n        return False\n    left_val = float('-inf') if idx == 0 else nums[idx - 1]\n    right_val = float('-inf') if idx == n - 1 else nums[idx + 1]\n    return nums[idx] > left_val and nums[idx] > right_val\n\ntest_cases = [\n    [1, 2, 3, 1],\n    [1, 2, 1, 3, 5, 6, 4],\n    [1],\n    [1, 2],\n    [2, 1],\n    [1, 2, 3],\n    [3, 2, 1],\n    [1, 2, 3, 1, 2, 1],\n    [-2, -1],\n    [-10, -5, -2, 0]\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i])\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findPeakElement(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and check_peak(test_cases[i], actual)\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i],\n        \"expectedOutput\": \"Valid peak index\",\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [1, 2, 3, 1],
      "expectedOutput": "Valid peak index",
      "isPublic": true
    },
    {
      "input": [1, 2, 1, 3, 5, 6, 4],
      "expectedOutput": "Valid peak index",
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": "Valid peak index",
      "isPublic": true
    },
    {
      "input": [1, 2],
      "expectedOutput": "Valid peak index",
      "isPublic": true
    },
    {
      "input": [2, 1],
      "expectedOutput": "Valid peak index",
      "isPublic": true
    },
    {
      "input": [1, 2, 3],
      "expectedOutput": "Valid peak index",
      "isPublic": false
    },
    {
      "input": [3, 2, 1],
      "expectedOutput": "Valid peak index",
      "isPublic": false
    },
    {
      "input": [1, 2, 3, 1, 2, 1],
      "expectedOutput": "Valid peak index",
      "isPublic": false
    },
    {
      "input": [-2, -1],
      "expectedOutput": "Valid peak index",
      "isPublic": false
    },
    {
      "input": [-10, -5, -2, 0],
      "expectedOutput": "Valid peak index",
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 6
}


]

// export default binarySearchProblems;