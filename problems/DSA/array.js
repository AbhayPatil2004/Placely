// import { array } from "node:stream/iter";

export default [

  {
  "title": "Maximum Consecutive Ones",
  "slug": "maximum-consecutive-ones",
  "problemStatement": "Given a binary array nums, return the maximum number of consecutive 1s in the array.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "sliding-window"],
  "pattern": ["ARRAY_TRAVERSAL"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a binary array nums for each test case.",
  "outputFormat": "Return an integer representing the maximum number of consecutive 1s.",
  "constraints": [
    "1 <= nums.length <= 10^5",
    "nums[i] is either 0 or 1"
  ],
  "examples": [
    {
      "input": "nums = [1,1,0,1,1,1]",
      "output": "3"
    },
    {
      "input": "nums = [1,0,1,1,0,1]",
      "output": "2"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int findMaxConsecutiveOnes(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var findMaxConsecutiveOnes = function(nums) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def findMaxConsecutiveOnes(self, nums):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {1,1,0,1,1,1},\n        {1,0,1,1,0,1},\n        {0,0,0,0},\n        {1,1,1,1,1},\n        {1},\n        {0},\n        {1,0,1},\n        {1,1,0,1,1},\n        {0,1,1,1,0,0,1,1,1,1},\n        {1,1,1,0,1,1,1,1,0,1,1}\n    };\n\n    vector<int> expected = {\n        3,\n        2,\n        0,\n        5,\n        1,\n        0,\n        1,\n        2,\n        4,\n        4\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.findMaxConsecutiveOnes(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n\n        input += \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {1,1,0,1,1,1},\n            {1,0,1,1,0,1},\n            {0,0,0,0},\n            {1,1,1,1,1},\n            {1},\n            {0},\n            {1,0,1},\n            {1,1,0,1,1},\n            {0,1,1,1,0,0,1,1,1,1},\n            {1,1,1,0,1,1,1,1,0,1,1}\n        };\n\n        int[] expected = {\n            3,\n            2,\n            0,\n            5,\n            1,\n            0,\n            1,\n            2,\n            4,\n            4\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findMaxConsecutiveOnes(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n\n            input.append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [1,1,0,1,1,1], expected: 3 },\n    { nums: [1,0,1,1,0,1], expected: 2 },\n    { nums: [0,0,0,0], expected: 0 },\n    { nums: [1,1,1,1,1], expected: 5 },\n    { nums: [1], expected: 1 },\n    { nums: [0], expected: 0 },\n    { nums: [1,0,1], expected: 1 },\n    { nums: [1,1,0,1,1], expected: 2 },\n    { nums: [0,1,1,1,0,0,1,1,1,1], expected: 4 },\n    { nums: [1,1,1,0,1,1,1,1,0,1,1], expected: 4 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findMaxConsecutiveOnes(nums);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1,1,0,1,1,1], 3),\n    ([1,0,1,1,0,1], 2),\n    ([0,0,0,0], 0),\n    ([1,1,1,1,1], 5),\n    ([1], 1),\n    ([0], 0),\n    ([1,0,1], 1),\n    ([1,1,0,1,1], 2),\n    ([0,1,1,1,0,0,1,1,1,1], 4),\n    ([1,1,1,0,1,1,1,1,0,1,1], 4)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    inputs = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findMaxConsecutiveOnes(inputs)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": inputs,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [1, 1, 0, 1, 1, 1],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": [1, 0, 1, 1, 0, 1],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [0, 0, 0, 0],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [1, 1, 1, 1, 1],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [1],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [0],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [1, 0, 1],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [1, 1, 0, 1, 1],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
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
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["TCS", "Infosys", "Wipro", "Accenture"],
  "order": 1
  },
  {
  "title": "Left Rotate Array by K Places",
  "slug": "left-rotate-array-by-k-places",
  "problemStatement": "Given an array of integers nums and an integer k, rotate the array to the left by k places.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "rotation", "two-pointers"],
  "pattern": ["ARRAY_MANIPULATION"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an array of integers nums and an integer k for each test case.",
  "outputFormat": "Return the modified array after left rotating by k places.",
  "constraints": [
    "1 <= nums.length <= 10^5",
    "-10^4 <= nums[i] <= 10^4",
    "0 <= k <= 10^5"
  ],
  "examples": [
    {
      "input": "nums = [1, 2, 3, 4, 5], k = 2",
      "output": "[3, 4, 5, 1, 2]"
    },
    {
      "input": "nums = [1, 2, 3], k = 1",
      "output": "[2, 3, 1]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> rotateArray(vector<int>& nums, int k) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] rotateArray(int[] nums, int k) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var rotateArray = function(nums, k) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def rotateArray(self, nums, k):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {1, 2, 3, 4, 5},\n        {1, 2, 3},\n        {1, 2, 3, 4, 5, 6, 7},\n        {1, 2},\n        {1, 2},\n        {5},\n        {1, 2, 3, 4},\n        {10, 20, 30},\n        {1, 2, 3, 4, 5, 6},\n        {7, 8, 9}\n    };\n\n    vector<int> kValues = {2, 1, 3, 0, 3, 10, 4, 5, 2, 100};\n\n    vector<vector<int>> expected = {\n        {3, 4, 5, 1, 2},\n        {2, 3, 1},\n        {4, 5, 6, 7, 1, 2, 3},\n        {1, 2},\n        {2, 1},\n        {5},\n        {1, 2, 3, 4},\n        {30, 10, 20},\n        {3, 4, 5, 6, 1, 2},\n        {8, 9, 7}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.rotateArray(numsCopy, kValues[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"], \" + to_string(kValues[i]) + \"]\";\n\n        string expectedOutput = \"[\";\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {1, 2, 3, 4, 5},\n            {1, 2, 3},\n            {1, 2, 3, 4, 5, 6, 7},\n            {1, 2},\n            {1, 2},\n            {5},\n            {1, 2, 3, 4},\n            {10, 20, 30},\n            {1, 2, 3, 4, 5, 6},\n            {7, 8, 9}\n        };\n\n        int[] kValues = {2, 1, 3, 0, 3, 10, 4, 5, 2, 100};\n\n        int[][] expected = {\n            {3, 4, 5, 1, 2},\n            {2, 3, 1},\n            {4, 5, 6, 7, 1, 2, 3},\n            {1, 2},\n            {2, 1},\n            {5},\n            {1, 2, 3, 4},\n            {30, 10, 20},\n            {3, 4, 5, 6, 1, 2},\n            {8, 9, 7}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.rotateArray(numsCopy, kValues[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], \").append(kValues[i]).append(\"]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < actual.length; j++) {\n                actualOutput.append(actual[j]);\n                if(j + 1 < actual.length)\n                    actualOutput.append(\", \");\n            }\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [1, 2, 3, 4, 5], k: 2, expected: [3, 4, 5, 1, 2] },\n    { nums: [1, 2, 3], k: 1, expected: [2, 3, 1] },\n    { nums: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [4, 5, 6, 7, 1, 2, 3] },\n    { nums: [1, 2], k: 0, expected: [1, 2] },\n    { nums: [1, 2], k: 3, expected: [2, 1] },\n    { nums: [5], k: 10, expected: [5] },\n    { nums: [1, 2, 3, 4], k: 4, expected: [1, 2, 3, 4] },\n    { nums: [10, 20, 30], k: 5, expected: [30, 10, 20] },\n    { nums: [1, 2, 3, 4, 5, 6], k: 2, expected: [3, 4, 5, 6, 1, 2] },\n    { nums: [7, 8, 9], k: 100, expected: [8, 9, 7] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, k, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = rotateArray(numsCopy, k);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums, k],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 2, 3, 4, 5], 2, [3, 4, 5, 1, 2]),\n    ([1, 2, 3], 1, [2, 3, 1]),\n    ([1, 2, 3, 4, 5, 6, 7], 3, [4, 5, 6, 7, 1, 2, 3]),\n    ([1, 2], 0, [1, 2]),\n    ([1, 2], 3, [2, 1]),\n    ([5], 10, [5]),\n    ([1, 2, 3, 4], 4, [1, 2, 3, 4]),\n    ([10, 20, 30], 5, [30, 10, 20]),\n    ([1, 2, 3, 4, 5, 6], 2, [3, 4, 5, 6, 1, 2]),\n    ([7, 8, 9], 100, [8, 9, 7])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    k = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.rotateArray(nums, k)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], k],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[1, 2, 3, 4, 5], 2],
      "expectedOutput": [3, 4, 5, 1, 2],
      "isPublic": true
    },
    {
      "input": [[1, 2, 3], 1],
      "expectedOutput": [2, 3, 1],
      "isPublic": true
    },
    {
      "input": [[1, 2, 3, 4, 5, 6, 7], 3],
      "expectedOutput": [4, 5, 6, 7, 1, 2, 3],
      "isPublic": true
    },
    {
      "input": [[1, 2], 0],
      "expectedOutput": [1, 2],
      "isPublic": false
    },
    {
      "input": [[1, 2], 3],
      "expectedOutput": [2, 1],
      "isPublic": false
    },
    {
      "input": [[5], 10],
      "expectedOutput": [5],
      "isPublic": false
    },
    {
      "input": [[1, 2, 3, 4], 4],
      "expectedOutput": [1, 2, 3, 4],
      "isPublic": false
    },
    {
      "input": [[10, 20, 30], 5],
      "expectedOutput": [30, 10, 20],
      "isPublic": false
    },
    {
      "input": [[1, 2, 3, 4, 5, 6], 2],
      "expectedOutput": [3, 4, 5, 6, 1, 2],
      "isPublic": false
    },
    {
      "input": [[7, 8, 9], 100],
      "expectedOutput": [8, 9, 7],
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(N) or O(1) depending on implementation",
  "companies": ["TCS", "Infosys", "Wipro", "Amazon", "Microsoft"],
  "order": 2
    },
  {
  "title": "Move Zeros to End",
  "slug": "move-zeros-to-end",
  "problemStatement": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "two-pointers"],
  "pattern": ["TWO_POINTERS"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer array nums for each test case.",
  "outputFormat": "Return the modified array after moving all zeros to the end.",
  "constraints": [
    "1 <= nums.length <= 10^5",
    "-2^31 <= nums[i] <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "nums = [0, 1, 0, 3, 12]",
      "output": "[1, 3, 12, 0, 0]"
    },
    {
      "input": "nums = [0, 0, 1]",
      "output": "[1, 0, 0]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> moveZeroes(vector<int>& nums) {\n        // Write your code here\n        return nums;\n    }\n};",
    "java": "class Solution {\n    public int[] moveZeroes(int[] nums) {\n        // Write your code here\n        return nums;\n    }\n}",
    "javascript": "var moveZeroes = function(nums) {\n    // Write your code here\n    return nums;\n};",
    "python": "class Solution:\n    def moveZeroes(self, nums):\n        # Write your code here\n        return nums"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {0, 1, 0, 3, 12},\n        {0, 0, 1},\n        {0},\n        {1, 2, 3, 4, 5},\n        {0, 0, 0, 0},\n        {4, 2, 4, 0, 0, 3, 0, 5, 1, 0},\n        {0, 0, 0, 1, 2, 3},\n        {5, 0, 0, 0, 1},\n        {2, 1},\n        {0, 0, 0, 0, 0, 5}\n    };\n\n    vector<vector<int>> expected = {\n        {1, 3, 12, 0, 0},\n        {1, 0, 0},\n        {0},\n        {1, 2, 3, 4, 5},\n        {0, 0, 0, 0},\n        {4, 2, 4, 3, 5, 1, 0, 0, 0, 0},\n        {1, 2, 3, 0, 0, 0},\n        {5, 1, 0, 0, 0},\n        {2, 1},\n        {5, 0, 0, 0, 0, 0}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.moveZeroes(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = \"[\";\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {0, 1, 0, 3, 12},\n            {0, 0, 1},\n            {0},\n            {1, 2, 3, 4, 5},\n            {0, 0, 0, 0},\n            {4, 2, 4, 0, 0, 3, 0, 5, 1, 0},\n            {0, 0, 0, 1, 2, 3},\n            {5, 0, 0, 0, 1},\n            {2, 1},\n            {0, 0, 0, 0, 0, 5}\n        };\n\n        int[][] expected = {\n            {1, 3, 12, 0, 0},\n            {1, 0, 0},\n            {0},\n            {1, 2, 3, 4, 5},\n            {0, 0, 0, 0},\n            {4, 2, 4, 3, 5, 1, 0, 0, 0, 0},\n            {1, 2, 3, 0, 0, 0},\n            {5, 1, 0, 0, 0},\n            {2, 1},\n            {5, 0, 0, 0, 0, 0}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.moveZeroes(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < actual.length; j++) {\n                actualOutput.append(actual[j]);\n                if(j + 1 < actual.length)\n                    actualOutput.append(\", \");\n            }\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },\n    { nums: [0, 0, 1], expected: [1, 0, 0] },\n    { nums: [0], expected: [0] },\n    { nums: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },\n    { nums: [0, 0, 0, 0], expected: [0, 0, 0, 0] },\n    { nums: [4, 2, 4, 0, 0, 3, 0, 5, 1, 0], expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0] },\n    { nums: [0, 0, 0, 1, 2, 3], expected: [1, 2, 3, 0, 0, 0] },\n    { nums: [5, 0, 0, 0, 1], expected: [5, 1, 0, 0, 0] },\n    { nums: [2, 1], expected: [2, 1] },\n    { nums: [0, 0, 0, 0, 0, 5], expected: [5, 0, 0, 0, 0, 0] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = moveZeroes(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([0, 1, 0, 3, 12], [1, 3, 12, 0, 0]),\n    ([0, 0, 1], [1, 0, 0]),\n    ([0], [0]),\n    ([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),\n    ([0, 0, 0, 0], [0, 0, 0, 0]),\n    ([4, 2, 4, 0, 0, 3, 0, 5, 1, 0], [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]),\n    ([0, 0, 0, 1, 2, 3], [1, 2, 3, 0, 0, 0]),\n    ([5, 0, 0, 0, 1], [5, 1, 0, 0, 0]),\n    ([2, 1], [2, 1]),\n    ([0, 0, 0, 0, 0, 5], [5, 0, 0, 0, 0, 0])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.moveZeroes(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [0, 1, 0, 3, 12],
      "expectedOutput": [1, 3, 12, 0, 0],
      "isPublic": true
    },
    {
      "input": [0, 0, 1],
      "expectedOutput": [1, 0, 0],
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": [0],
      "isPublic": true
    },
    {
      "input": [1, 2, 3, 4, 5],
      "expectedOutput": [1, 2, 3, 4, 5],
      "isPublic": false
    },
    {
      "input": [0, 0, 0, 0],
      "expectedOutput": [0, 0, 0, 0],
      "isPublic": false
    },
    {
      "input": [4, 2, 4, 0, 0, 3, 0, 5, 1, 0],
      "expectedOutput": [4, 2, 4, 3, 5, 1, 0, 0, 0, 0],
      "isPublic": false
    },
    {
      "input": [0, 0, 0, 1, 2, 3],
      "expectedOutput": [1, 2, 3, 0, 0, 0],
      "isPublic": false
    },
    {
      "input": [5, 0, 0, 0, 1],
      "expectedOutput": [5, 1, 0, 0, 0],
      "isPublic": false
    },
    {
      "input": [2, 1],
      "expectedOutput": [2, 1],
      "isPublic": false
    },
    {
      "input": [0, 0, 0, 0, 0, 5],
      "expectedOutput": [5, 0, 0, 0, 0, 0],
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["TCS", "Infosys", "Wipro", "Amazon", "Microsoft"],
  "order": 3
  },
  {
  "title": "Remove Duplicates from Sorted Array",
  "slug": "remove-duplicates-from-sorted-array",
  "problemStatement": "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the array containing only the unique elements.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "two-pointers"],
  "pattern": ["TWO_POINTERS"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a sorted integer array nums for each test case.",
  "outputFormat": "Return the array containing the unique elements in their original order.",
  "constraints": [
    "1 <= nums.length <= 3 * 10^4",
    "-100 <= nums[i] <= 100",
    "nums is sorted in non-decreasing order."
  ],
  "examples": [
    {
      "input": "nums = [1, 1, 2]",
      "output": "[1, 2]"
    },
    {
      "input": "nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]",
      "output": "[0, 1, 2, 3, 4]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> removeDuplicates(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] removeDuplicates(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var removeDuplicates = function(nums) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def removeDuplicates(self, nums):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {1, 1, 2},\n        {0, 0, 1, 1, 1, 2, 2, 3, 3, 4},\n        {1, 2, 3, 4, 5},\n        {1, 1, 1, 1},\n        {5},\n        {-2, -2, -1, 0, 0, 1},\n        {2, 2, 2, 2, 2},\n        {-10, -10, -5, -5, 0, 5, 5, 10},\n        {100},\n        {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}\n    };\n\n    vector<vector<int>> expected = {\n        {1, 2},\n        {0, 1, 2, 3, 4},\n        {1, 2, 3, 4, 5},\n        {1},\n        {5},\n        {-2, -1, 0, 1},\n        {2},\n        {-10, -5, 0, 5, 10},\n        {100},\n        {1, 2, 3, 4}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.removeDuplicates(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = \"[\";\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {1, 1, 2},\n            {0, 0, 1, 1, 1, 2, 2, 3, 3, 4},\n            {1, 2, 3, 4, 5},\n            {1, 1, 1, 1},\n            {5},\n            {-2, -2, -1, 0, 0, 1},\n            {2, 2, 2, 2, 2},\n            {-10, -10, -5, -5, 0, 5, 5, 10},\n            {100},\n            {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}\n        };\n\n        int[][] expected = {\n            {1, 2},\n            {0, 1, 2, 3, 4},\n            {1, 2, 3, 4, 5},\n            {1},\n            {5},\n            {-2, -1, 0, 1},\n            {2},\n            {-10, -5, 0, 5, 10},\n            {100},\n            {1, 2, 3, 4}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.removeDuplicates(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < actual.length; j++) {\n                actualOutput.append(actual[j]);\n                if(j + 1 < actual.length)\n                    actualOutput.append(\", \");\n            }\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [1, 1, 2], expected: [1, 2] },\n    { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: [0, 1, 2, 3, 4] },\n    { nums: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },\n    { nums: [1, 1, 1, 1], expected: [1] },\n    { nums: [5], expected: [5] },\n    { nums: [-2, -2, -1, 0, 0, 1], expected: [-2, -1, 0, 1] },\n    { nums: [2, 2, 2, 2, 2], expected: [2] },\n    { nums: [-10, -10, -5, -5, 0, 5, 5, 10], expected: [-10, -5, 0, 5, 10] },\n    { nums: [100], expected: [100] },\n    { nums: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4], expected: [1, 2, 3, 4] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = removeDuplicates(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 1, 2], [1, 2]),\n    ([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]),\n    ([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),\n    ([1, 1, 1, 1], [1]),\n    ([5], [5]),\n    ([-2, -2, -1, 0, 0, 1], [-2, -1, 0, 1]),\n    ([2, 2, 2, 2, 2], [2]),\n    ([-10, -10, -5, -5, 0, 5, 5, 10], [-10, -5, 0, 5, 10]),\n    ([100], [100]),\n    ([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], [1, 2, 3, 4])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.removeDuplicates(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [1, 1, 2],
      "expectedOutput": [1, 2],
      "isPublic": true
    },
    {
      "input": [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      "expectedOutput": [0, 1, 2, 3, 4],
      "isPublic": true
    },
    {
      "input": [1, 2, 3, 4, 5],
      "expectedOutput": [1, 2, 3, 4, 5],
      "isPublic": true
    },
    {
      "input": [1, 1, 1, 1],
      "expectedOutput": [1],
      "isPublic": false
    },
    {
      "input": [5],
      "expectedOutput": [5],
      "isPublic": false
    },
    {
      "input": [-2, -2, -1, 0, 0, 1],
      "expectedOutput": [-2, -1, 0, 1],
      "isPublic": false
    },
    {
      "input": [2, 2, 2, 2, 2],
      "expectedOutput": [2],
      "isPublic": false
    },
    {
      "input": [-10, -10, -5, -5, 0, 5, 5, 10],
      "expectedOutput": [-10, -5, 0, 5, 10],
      "isPublic": false
    },
    {
      "input": [100],
      "expectedOutput": [100],
      "isPublic": false
    },
    {
      "input": [1, 2, 2, 3, 3, 3, 4, 4, 4, 4],
      "expectedOutput": [1, 2, 3, 4],
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "TCS", "Infosys"],
  "order": 4
  },
{
  "title": "Find Missing Number",
  "slug": "find-missing-number",
  "problemStatement": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "math", "bit-manipulation"],
  "pattern": ["BIT_MANIPULATION", "MATH"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer array nums for each test case.",
  "outputFormat": "Return an integer representing the missing number.",
  "constraints": [
    "n == nums.length",
    "1 <= n <= 10^4",
    "0 <= nums[i] <= n",
    "All the numbers of nums are unique."
  ],
  "examples": [
    {
      "input": "nums = [3, 0, 1]",
      "output": "2"
    },
    {
      "input": "nums = [0, 1]",
      "output": "2"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var missingNumber = function(nums) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def missingNumber(self, nums):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {3, 0, 1},\n        {0, 1},\n        {9, 6, 4, 2, 3, 5, 7, 0, 1},\n        {0},\n        {1},\n        {1, 2, 3, 4, 5, 0, 7, 8, 9, 10},\n        {4, 0, 3, 1, 5},\n        {2, 0, 1},\n        {0, 1, 2, 3, 4, 5, 6, 8, 9},\n        {8, 2, 3, 5, 7, 0, 1, 4, 6}\n    };\n\n    vector<int> expected = {\n        2,\n        2,\n        8,\n        1,\n        0,\n        6,\n        2,\n        3,\n        7,\n        9\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.missingNumber(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {3, 0, 1},\n            {0, 1},\n            {9, 6, 4, 2, 3, 5, 7, 0, 1},\n            {0},\n            {1},\n            {1, 2, 3, 4, 5, 0, 7, 8, 9, 10},\n            {4, 0, 3, 1, 5},\n            {2, 0, 1},\n            {0, 1, 2, 3, 4, 5, 6, 8, 9},\n            {8, 2, 3, 5, 7, 0, 1, 4, 6}\n        };\n\n        int[] expected = {\n            2,\n            2,\n            8,\n            1,\n            0,\n            6,\n            2,\n            3,\n            7,\n            9\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.missingNumber(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [3, 0, 1], expected: 2 },\n    { nums: [0, 1], expected: 2 },\n    { nums: [9, 6, 4, 2, 3, 5, 7, 0, 1], expected: 8 },\n    { nums: [0], expected: 1 },\n    { nums: [1], expected: 0 },\n    { nums: [1, 2, 3, 4, 5, 0, 7, 8, 9, 10], expected: 6 },\n    { nums: [4, 0, 3, 1, 5], expected: 2 },\n    { nums: [2, 0, 1], expected: 3 },\n    { nums: [0, 1, 2, 3, 4, 5, 6, 8, 9], expected: 7 },\n    { nums: [8, 2, 3, 5, 7, 0, 1, 4, 6], expected: 9 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = missingNumber(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([3, 0, 1], 2),\n    ([0, 1], 2),\n    ([9, 6, 4, 2, 3, 5, 7, 0, 1], 8),\n    ([0], 1),\n    ([1], 0),\n    ([1, 2, 3, 4, 5, 0, 7, 8, 9, 10], 6),\n    ([4, 0, 3, 1, 5], 2),\n    ([2, 0, 1], 3),\n    ([0, 1, 2, 3, 4, 5, 6, 8, 9], 7),\n    ([8, 2, 3, 5, 7, 0, 1, 4, 6], 9)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.missingNumber(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [3, 0, 1],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [0, 1],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [9, 6, 4, 2, 3, 5, 7, 0, 1],
      "expectedOutput": 8,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [1],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [1, 2, 3, 4, 5, 0, 7, 8, 9, 10],
      "expectedOutput": 6,
      "isPublic": false
    },
    {
      "input": [4, 0, 3, 1, 5],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [2, 0, 1],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [0, 1, 2, 3, 4, 5, 6, 8, 9],
      "expectedOutput": 7,
      "isPublic": false
    },
    {
      "input": [8, 2, 3, 5, 7, 0, 1, 4, 6],
      "expectedOutput": 9,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "TCS", "Infosys"],
  "order": 5
  },
{
  "title": "Two Sum",
  "slug": "two-sum",
  "problemStatement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "hash-table"],
  "pattern": ["HASH_MAP"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer array nums and an integer target for each test case.",
  "outputFormat": "Return an array containing the indices of the two numbers.",
  "constraints": [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists."
  ],
  "examples": [
    {
      "input": "nums = [2, 7, 11, 15], target = 9",
      "output": "[0, 1]"
    },
    {
      "input": "nums = [3, 2, 4], target = 6",
      "output": "[1, 2]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var twoSum = function(nums, target) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def twoSum(self, nums, target):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {2, 7, 11, 15},\n        {3, 2, 4},\n        {3, 3},\n        {1, 2, 3, 4, 5},\n        {-1, -2, -3, -4, -5},\n        {0, 4, 3, 0},\n        {-3, 4, 3, 90},\n        {2, 5, 5, 11},\n        {10, 20, 30, 40, 50},\n        {0, 1, 2, 3}\n    };\n\n    vector<int> targets = {9, 6, 6, 9, -8, 0, 0, 10, 70, 5};\n\n    vector<vector<int>> expected = {\n        {0, 1},\n        {1, 2},\n        {0, 1},\n        {3, 4},\n        {2, 4},\n        {0, 3},\n        {0, 2},\n        {1, 2},\n        {1, 4},\n        {2, 3}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.twoSum(numsCopy, targets[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        // Sort actual to handle any order of indices returned\n        vector<int> sortedActual = actual;\n        sort(sortedActual.begin(), sortedActual.end());\n        vector<int> sortedExpected = expected[i];\n        sort(sortedExpected.begin(), sortedExpected.end());\n\n        bool passed = !runtimeError && sortedActual == sortedExpected;\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"], \" + to_string(targets[i]) + \"]\";\n\n        string expectedOutput = \"[\";\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {2, 7, 11, 15},\n            {3, 2, 4},\n            {3, 3},\n            {1, 2, 3, 4, 5},\n            {-1, -2, -3, -4, -5},\n            {0, 4, 3, 0},\n            {-3, 4, 3, 90},\n            {2, 5, 5, 11},\n            {10, 20, 30, 40, 50},\n            {0, 1, 2, 3}\n        };\n\n        int[] targets = {9, 6, 6, 9, -8, 0, 0, 10, 70, 5};\n\n        int[][] expected = {\n            {0, 1},\n            {1, 2},\n            {0, 1},\n            {3, 4},\n            {2, 4},\n            {0, 3},\n            {0, 2},\n            {1, 2},\n            {1, 4},\n            {2, 3}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.twoSum(numsCopy, targets[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            int[] sortedActual = actual != null ? actual.clone() : new int[]{};\n            java.util.Arrays.sort(sortedActual);\n            int[] sortedExpected = expected[i].clone();\n            java.util.Arrays.sort(sortedExpected);\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(sortedActual, sortedExpected);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], \").append(targets[i]).append(\"]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n            if(actual != null) {\n                for(int j = 0; j < actual.length; j++) {\n                    actualOutput.append(actual[j]);\n                    if(j + 1 < actual.length)\n                        actualOutput.append(\", \");\n                }\n            }\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },\n    { nums: [3, 2, 4], target: 6, expected: [1, 2] },\n    { nums: [3, 3], target: 6, expected: [0, 1] },\n    { nums: [1, 2, 3, 4, 5], target: 9, expected: [3, 4] },\n    { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },\n    { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },\n    { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2] },\n    { nums: [2, 5, 5, 11], target: 10, expected: [1, 2] },\n    { nums: [10, 20, 30, 40, 50], target: 70, expected: [1, 4] },\n    { nums: [0, 1, 2, 3], target: 5, expected: [2, 3] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, target, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = twoSum(numsCopy, target);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const sortedActual = Array.isArray(actual) ? [...actual].sort((a, b) => a - b) : [];\n    const sortedExpected = [...expected].sort((a, b) => a - b);\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        sortedActual.length === sortedExpected.length &&\n        sortedActual.every((value, index) => value === sortedExpected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums, target],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([2, 7, 11, 15], 9, [0, 1]),\n    ([3, 2, 4], 6, [1, 2]),\n    ([3, 3], 6, [0, 1]),\n    ([1, 2, 3, 4, 5], 9, [3, 4]),\n    ([-1, -2, -3, -4, -5], -8, [2, 4]),\n    ([0, 4, 3, 0], 0, [0, 3]),\n    ([-3, 4, 3, 90], 0, [0, 2]),\n    ([2, 5, 5, 11], 10, [1, 2]),\n    ([10, 20, 30, 40, 50], 70, [1, 4]),\n    ([0, 1, 2, 3], 5, [2, 3])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    target = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.twoSum(nums, target)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    sorted_actual = sorted(actual) if isinstance(actual, list) else []\n    sorted_expected = sorted(expected)\n\n    passed = not runtimeError and sorted_actual == sorted_expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], target],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[2, 7, 11, 15], 9],
      "expectedOutput": [0, 1],
      "isPublic": true
    },
    {
      "input": [[3, 2, 4], 6],
      "expectedOutput": [1, 2],
      "isPublic": true
    },
    {
      "input": [[3, 3], 6],
      "expectedOutput": [0, 1],
      "isPublic": true
    },
    {
      "input": [[1, 2, 3, 4, 5], 9],
      "expectedOutput": [3, 4],
      "isPublic": true
    },
    {
      "input": [[-1, -2, -3, -4, -5], -8],
      "expectedOutput": [2, 4],
      "isPublic": true
    },
    {
      "input": [[0, 4, 3, 0], 0],
      "expectedOutput": [0, 3],
      "isPublic": false
    },
    {
      "input": [[-3, 4, 3, 90], 0],
      "expectedOutput": [0, 2],
      "isPublic": false
    },
    {
      "input": [[2, 5, 5, 11], 10],
      "expectedOutput": [1, 2],
      "isPublic": false
    },
    {
      "input": [[10, 20, 30, 40, 50], 70],
      "expectedOutput": [1, 4],
      "isPublic": false
    },
    {
      "input": [[0, 1, 2, 3], 5],
      "expectedOutput": [2, 3],
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(N)",
  "companies": ["TCS", "Infosys", "Wipro"],
  "order": 6
  },
{
  "title": "Majority Element",
  "slug": "majority-element",
  "problemStatement": "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "sorting", "voting-algorithm"],
  "pattern": ["MOORES_VOTING_ALGORITHM"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides an integer array nums for each test case.",
  "outputFormat": "Return an integer representing the majority element.",
  "constraints": [
    "n == nums.length",
    "1 <= n <= 5 * 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "The majority element is guaranteed to exist in the array."
  ],
  "examples": [
    {
      "input": "nums = [3, 2, 3]",
      "output": "3"
    },
    {
      "input": "nums = [2, 2, 1, 1, 1, 2, 2]",
      "output": "2"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int majorityElement(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var majorityElement = function(nums) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def majorityElement(self, nums):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {3, 2, 3},\n        {2, 2, 1, 1, 1, 2, 2},\n        {1},\n        {6, 5, 5},\n        {-1, 1, 1, 1, 2, 1, 4},\n        {8, 8, 7, 7, 8},\n        {4, 4, 4, 1, 2, 4, 4},\n        {10},\n        {2, 2, 2, 3, 3},\n        {100, -100, 100, 100, 200, 100, 300}\n    };\n\n    vector<int> expected = {\n        3,\n        2,\n        1,\n        5,\n        1,\n        8,\n        4,\n        10,\n        2,\n        100\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.majorityElement(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {3, 2, 3},\n            {2, 2, 1, 1, 1, 2, 2},\n            {1},\n            {6, 5, 5},\n            {-1, 1, 1, 1, 2, 1, 4},\n            {8, 8, 7, 7, 8},\n            {4, 4, 4, 1, 2, 4, 4},\n            {10},\n            {2, 2, 2, 3, 3},\n            {100, -100, 100, 100, 200, 100, 300}\n        };\n\n        int[] expected = {\n            3,\n            2,\n            1,\n            5,\n            1,\n            8,\n            4,\n            10,\n            2,\n            100\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.majorityElement(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [3, 2, 3], expected: 3 },\n    { nums: [2, 2, 1, 1, 1, 2, 2], expected: 2 },\n    { nums: [1], expected: 1 },\n    { nums: [6, 5, 5], expected: 5 },\n    { nums: [-1, 1, 1, 1, 2, 1, 4], expected: 1 },\n    { nums: [8, 8, 7, 7, 8], expected: 8 },\n    { nums: [4, 4, 4, 1, 2, 4, 4], expected: 4 },\n    { nums: [10], expected: 10 },\n    { nums: [2, 2, 2, 3, 3], expected: 2 },\n    { nums: [100, -100, 100, 100, 200, 100, 300], expected: 100 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = majorityElement(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([3, 2, 3], 3),\n    ([2, 2, 1, 1, 1, 2, 2], 2),\n    ([1], 1),\n    ([6, 5, 5], 5),\n    ([-1, 1, 1, 1, 2, 1, 4], 1),\n    ([8, 8, 7, 7, 8], 8),\n    ([4, 4, 4, 1, 2, 4, 4], 4),\n    ([10], 10),\n    ([2, 2, 2, 3, 3], 2),\n    ([100, -100, 100, 100, 200, 100, 300], 100)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.majorityElement(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [3, 2, 3],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": [2, 2, 1, 1, 1, 2, 2],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [6, 5, 5],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": [-1, 1, 1, 1, 2, 1, 4],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [8, 8, 7, 7, 8],
      "expectedOutput": 8,
      "isPublic": false
    },
    {
      "input": [4, 4, 4, 1, 2, 4, 4],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [10],
      "expectedOutput": 10,
      "isPublic": false
    },
    {
      "input": [2, 2, 2, 3, 3],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [100, -100, 100, 100, 200, 100, 300],
      "expectedOutput": 100,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 7
  },
{
  "title": "Maximum Subarray Sum",
  "slug": "maximum-subarray-sum",
  "problemStatement": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "dynamic-programming", "divide-and-conquer"],
  "pattern": ["KADANES_ALGORITHM"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides an integer array nums for each test case.",
  "outputFormat": "Return an integer representing the maximum subarray sum.",
  "constraints": [
    "1 <= nums.length <= 10^5",
    "-10^4 <= nums[i] <= 10^4"
  ],
  "examples": [
    {
      "input": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
      "output": "6"
    },
    {
      "input": "nums = [1]",
      "output": "1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var maxSubArray = function(nums) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def maxSubArray(self, nums):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {-2, 1, -3, 4, -1, 2, 1, -5, 4},\n        {1},\n        {5, 4, -1, 7, 8},\n        {-1, -2, -3, -4},\n        {-2, -3, -1, -5},\n        {0, 0, 0, 0},\n        {-2, 1},\n        {2, -1, 2, 3, 4, -5},\n        {-10},\n        {1, 2, 3, -2, 5}\n    };\n\n    vector<int> expected = {\n        6,\n        1,\n        23,\n        -1,\n        -1,\n        0,\n        1,\n        10,\n        -10,\n        9\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.maxSubArray(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {-2, 1, -3, 4, -1, 2, 1, -5, 4},\n            {1},\n            {5, 4, -1, 7, 8},\n            {-1, -2, -3, -4},\n            {-2, -3, -1, -5},\n            {0, 0, 0, 0},\n            {-2, 1},\n            {2, -1, 2, 3, 4, -5},\n            {-10},\n            {1, 2, 3, -2, 5}\n        };\n\n        int[] expected = {\n            6,\n            1,\n            23,\n            -1,\n            -1,\n            0,\n            1,\n            10,\n            -10,\n            9\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.maxSubArray(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },\n    { nums: [1], expected: 1 },\n    { nums: [5, 4, -1, 7, 8], expected: 23 },\n    { nums: [-1, -2, -3, -4], expected: -1 },\n    { nums: [-2, -3, -1, -5], expected: -1 },\n    { nums: [0, 0, 0, 0], expected: 0 },\n    { nums: [-2, 1], expected: 1 },\n    { nums: [2, -1, 2, 3, 4, -5], expected: 10 },\n    { nums: [-10], expected: -10 },\n    { nums: [1, 2, 3, -2, 5], expected: 9 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = maxSubArray(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6),\n    ([1], 1),\n    ([5, 4, -1, 7, 8], 23),\n    ([-1, -2, -3, -4], -1),\n    ([-2, -3, -1, -5], -1),\n    ([0, 0, 0, 0], 0),\n    ([-2, 1], 1),\n    ([2, -1, 2, 3, 4, -5], 10),\n    ([-10], -10),\n    ([1, 2, 3, -2, 5], 9)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.maxSubArray(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [5, 4, -1, 7, 8],
      "expectedOutput": 23,
      "isPublic": true
    },
    {
      "input": [-1, -2, -3, -4],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [-2, -3, -1, -5],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [0, 0, 0, 0],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [-2, 1],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [2, -1, 2, 3, 4, -5],
      "expectedOutput": 10,
      "isPublic": false
    },
    {
      "input": [-10],
      "expectedOutput": -10,
      "isPublic": false
    },
    {
      "input": [1, 2, 3, -2, 5],
      "expectedOutput": 9,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 8
  },
{
  "title": "Find the Repeating and Missing Number",
  "slug": "find-the-repeating-and-missing-number",
  "problemStatement": "You are given an unsorted array of size n containing integers from 1 to n. One number is duplicated (appears twice) and one number is missing. Find and return both numbers in an array where the first element is the repeating number and the second element is the missing number.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "math", "bit-manipulation"],
  "pattern": ["MATH", "BIT_MANIPULATION"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides an integer array nums for each test case.",
  "outputFormat": "Return an array of size 2 containing [repeating_number, missing_number].",
  "constraints": [
    "2 <= nums.length <= 10^5",
    "1 <= nums[i] <= n"
  ],
  "examples": [
    {
      "input": "nums = [3, 1, 2, 5, 3]",
      "output": "[3, 4]"
    },
    {
      "input": "nums = [1, 2, 2, 4]",
      "output": "[2, 3]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> findMissingAndRepeating(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] findMissingAndRepeating(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var findMissingAndRepeating = function(nums) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def findMissingAndRepeating(self, nums):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {3, 1, 2, 5, 3},\n        {1, 2, 2, 4},\n        {2, 2},\n        {1, 3, 3},\n        {4, 3, 6, 2, 1, 1},\n        {1, 2, 3, 4, 5, 6, 7, 8, 9, 9},\n        {2, 3, 2, 1, 5},\n        {1, 1},\n        {5, 4, 3, 2, 1, 5},\n        {3, 1, 4, 4, 2}\n    };\n\n    vector<vector<int>> expected = {\n        {3, 4},\n        {2, 3},\n        {2, 1},\n        {3, 2},\n        {1, 5},\n        {9, 10},\n        {2, 4},\n        {1, 2},\n        {5, 6},\n        {4, 5}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.findMissingAndRepeating(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = \"[\";\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {3, 1, 2, 5, 3},\n            {1, 2, 2, 4},\n            {2, 2},\n            {1, 3, 3},\n            {4, 3, 6, 2, 1, 1},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 9},\n            {2, 3, 2, 1, 5},\n            {1, 1},\n            {5, 4, 3, 2, 1, 5},\n            {3, 1, 4, 4, 2}\n        };\n\n        int[][] expected = {\n            {3, 4},\n            {2, 3},\n            {2, 1},\n            {3, 2},\n            {1, 5},\n            {9, 10},\n            {2, 4},\n            {1, 2},\n            {5, 6},\n            {4, 5}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findMissingAndRepeating(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n            if(actual != null) {\n                for(int j = 0; j < actual.length; j++) {\n                    actualOutput.append(actual[j]);\n                    if(j + 1 < actual.length)\n                        actualOutput.append(\", \");\n                }\n            }\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [3, 1, 2, 5, 3], expected: [3, 4] },\n    { nums: [1, 2, 2, 4], expected: [2, 3] },\n    { nums: [2, 2], expected: [2, 1] },\n    { nums: [1, 3, 3], expected: [3, 2] },\n    { nums: [4, 3, 6, 2, 1, 1], expected: [1, 5] },\n    { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9], expected: [9, 10] },\n    { nums: [2, 3, 2, 1, 5], expected: [2, 4] },\n    { nums: [1, 1], expected: [1, 2] },\n    { nums: [5, 4, 3, 2, 1, 5], expected: [5, 6] },\n    { nums: [3, 1, 4, 4, 2], expected: [4, 5] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findMissingAndRepeating(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([3, 1, 2, 5, 3], [3, 4]),\n    ([1, 2, 2, 4], [2, 3]),\n    ([2, 2], [2, 1]),\n    ([1, 3, 3], [3, 2]),\n    ([4, 3, 6, 2, 1, 1], [1, 5]),\n    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], [9, 10]),\n    ([2, 3, 2, 1, 5], [2, 4]),\n    ([1, 1], [1, 2]),\n    ([5, 4, 3, 2, 1, 5], [5, 6]),\n    ([3, 1, 4, 4, 2], [4, 5])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findMissingAndRepeating(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [3, 1, 2, 5, 3],
      "expectedOutput": [3, 4],
      "isPublic": true
    },
    {
      "input": [1, 2, 2, 4],
      "expectedOutput": [2, 3],
      "isPublic": true
    },
    {
      "input": [2, 2],
      "expectedOutput": [2, 1],
      "isPublic": true
    },
    {
      "input": [1, 3, 3],
      "expectedOutput": [3, 2],
      "isPublic": true
    },
    {
      "input": [4, 3, 6, 2, 1, 1],
      "expectedOutput": [1, 5],
      "isPublic": true
    },
    {
      "input": [1, 2, 3, 4, 5, 6, 7, 8, 9, 9],
      "expectedOutput": [9, 10],
      "isPublic": false
    },
    {
      "input": [2, 3, 2, 1, 5],
      "expectedOutput": [2, 4],
      "isPublic": false
    },
    {
      "input": [1, 1],
      "expectedOutput": [1, 2],
      "isPublic": false
    },
    {
      "input": [5, 4, 3, 2, 1, 5],
      "expectedOutput": [5, 6],
      "isPublic": false
    },
    {
      "input": [3, 1, 4, 4, 2],
      "expectedOutput": [4, 5],
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "TCS", "Infosys", "Wipro"],
  "order": 9
  },
{
  "title": "Maximum Product Subarray",
  "slug": "maximum-product-subarray",
  "problemStatement": "Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "dynamic-programming"],
  "pattern": ["DYNAMIC_PROGRAMMING"],
  "difficulty": "HARD",
  "inputFormat": "The driver provides an integer array nums for each test case.",
  "outputFormat": "Return an integer representing the maximum product subarray.",
  "constraints": [
    "1 <= nums.length <= 2 * 10^4",
    "-10 <= nums[i] <= 10",
    "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."
  ],
  "examples": [
    {
      "input": "nums = [2, 3, -2, 4]",
      "output": "6"
    },
    {
      "input": "nums = [-2, 0, -1]",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int maxProduct(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var maxProduct = function(nums) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def maxProduct(self, nums):\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {2, 3, -2, 4},\n        {-2, 0, -1},\n        {-2, 3, -4},\n        {0, 2},\n        {-2},\n        {3, -1, 4},\n        {-2, 3, -2, 4},\n        {1, 2, -3, 0, -4, -5},\n        {-2, 3, 0, -2, 4},\n        {2, 3, 0, 5, 6}\n    };\n\n    vector<int> expected = {\n        6,\n        0,\n        24,\n        2,\n        -2,\n        4,\n        48,\n        20,\n        4,\n        30\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> numsCopy = inputs[i];\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.maxProduct(numsCopy);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n        input += \"]\";\n\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {2, 3, -2, 4},\n            {-2, 0, -1},\n            {-2, 3, -4},\n            {0, 2},\n            {-2},\n            {3, -1, 4},\n            {-2, 3, -2, 4},\n            {1, 2, -3, 0, -4, -5},\n            {-2, 3, 0, -2, 4},\n            {2, 3, 0, 5, 6}\n        };\n\n        int[] expected = {\n            6,\n            0,\n            24,\n            2,\n            -2,\n            4,\n            48,\n            20,\n            4,\n            30\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] numsCopy = inputs[i].clone();\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.maxProduct(numsCopy);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]\");\n\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums: [2, 3, -2, 4], expected: 6 },\n    { nums: [-2, 0, -1], expected: 0 },\n    { nums: [-2, 3, -4], expected: 24 },\n    { nums: [0, 2], expected: 2 },\n    { nums: [-2], expected: -2 },\n    { nums: [3, -1, 4], expected: 4 },\n    { nums: [-2, 3, -2, 4], expected: 48 },\n    { nums: [1, 2, -3, 0, -4, -5], expected: 20 },\n    { nums: [-2, 3, 0, -2, 4], expected: 4 },\n    { nums: [2, 3, 0, 5, 6], expected: 30 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums, expected } = testCases[i];\n    const numsCopy = [...nums];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = maxProduct(numsCopy);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: nums,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([2, 3, -2, 4], 6),\n    ([-2, 0, -1], 0),\n    ([-2, 3, -4], 24),\n    ([0, 2], 2),\n    ([-2], -2),\n    ([3, -1, 4], 4),\n    ([-2, 3, -2, 4], 48),\n    ([1, 2, -3, 0, -4, -5], 20),\n    ([-2, 3, 0, -2, 4], 4),\n    ([2, 3, 0, 5, 6], 30)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums = list(test_cases[i][0])\n    expected = test_cases[i][1]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.maxProduct(nums)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": test_cases[i][0],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [2, 3, -2, 4],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [-2, 0, -1],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [-2, 3, -4],
      "expectedOutput": 24,
      "isPublic": true
    },
    {
      "input": [0, 2],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [-2],
      "expectedOutput": -2,
      "isPublic": true
    },
    {
      "input": [3, -1, 4],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [-2, 3, -2, 4],
      "expectedOutput": 48,
      "isPublic": false
    },
    {
      "input": [1, 2, -3, 0, -4, -5],
      "expectedOutput": 20,
      "isPublic": false
    },
    {
      "input": [-2, 3, 0, -2, 4],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [2, 3, 0, 5, 6],
      "expectedOutput": 30,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["Amazon", "Microsoft", "Google", "TCS", "Infosys"],
  "order": 10
  },
{
  "title": "Merge Two Sorted Arrays Without Extra Space",
  "slug": "merge-two-sorted-arrays-without-extra-space",
  "problemStatement": "Given two sorted arrays nums1 and nums2 of sizes n and m respectively, merge them into a single sorted array in non-decreasing order without using extra space (i.e., O(1) auxiliary space).",
  "topic": "ARRAY",
  "subTopics": [],
  "tags": ["array", "two-pointers", "sorting"],
  "pattern": ["TWO_POINTERS", "GAP_METHOD"],
  "difficulty": "HARD",
  "inputFormat": "The driver provides two sorted integer arrays nums1 and nums2 for each test case.",
  "outputFormat": "Return a single sorted array containing all elements from both nums1 and nums2.",
  "constraints": [
    "1 <= nums1.length, nums2.length <= 10^4",
    "-10^9 <= nums1[i], nums2[i] <= 10^9",
    "nums1 and nums2 are sorted in non-decreasing order."
  ],
  "examples": [
    {
      "input": "nums1 = [1, 3, 5, 7], nums2 = [0, 2, 6, 8, 9]",
      "output": "[0, 1, 2, 3, 5, 6, 7, 8, 9]"
    },
    {
      "input": "nums1 = [1, 4, 8], nums2 = [2, 3, 5]",
      "output": "[1, 2, 3, 4, 5, 8]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> mergeTwoSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] mergeTwoSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var mergeTwoSortedArrays = function(nums1, nums2) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def mergeTwoSortedArrays(self, nums1, nums2):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs1 = {\n        {1, 3, 5, 7},\n        {1, 4, 8},\n        {2, 2},\n        {1},\n        {2, 3, 8},\n        {5, 10, 15},\n        {1, 2, 3},\n        {10},\n        {-5, 0, 3},\n        {2, 4, 6, 8}\n    };\n\n    vector<vector<int>> inputs2 = {\n        {0, 2, 6, 8, 9},\n        {2, 3, 5},\n        {1, 3},\n        {2},\n        {1, 5, 7},\n        {1, 2, 3},\n        {4, 5, 6},\n        {1, 5},\n        {-2, 1, 4},\n        {1, 3, 5, 7}\n    };\n\n    vector<vector<int>> expected = {\n        {0, 1, 2, 3, 5, 6, 7, 8, 9},\n        {1, 2, 3, 4, 5, 8},\n        {1, 2, 2, 3},\n        {1, 2},\n        {1, 2, 3, 5, 7, 8},\n        {1, 2, 3, 5, 10, 15},\n        {1, 2, 3, 4, 5, 6},\n        {1, 5, 10},\n        {-5, -2, 0, 1, 3, 4},\n        {1, 2, 3, 4, 5, 6, 7, 8}\n    };\n\n    int totalTestCases = inputs1.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> copy1 = inputs1[i];\n        vector<int> copy2 = inputs2[i];\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.mergeTwoSortedArrays(copy1, copy2);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[[\";\n        for(int j = 0; j < inputs1[i].size(); j++) {\n            input += to_string(inputs1[i][j]);\n            if(j + 1 < inputs1[i].size())\n                input += \", \";\n        }\n        input += \"], [\";\n        for(int j = 0; j < inputs2[i].size(); j++) {\n            input += to_string(inputs2[i][j]);\n            if(j + 1 < inputs2[i].size())\n                input += \", \";\n        }\n        input += \"]]\";\n\n        string expectedOutput = \"[\";\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs1 = {\n            {1, 3, 5, 7},\n            {1, 4, 8},\n            {2, 2},\n            {1},\n            {2, 3, 8},\n            {5, 10, 15},\n            {1, 2, 3},\n            {10},\n            {-5, 0, 3},\n            {2, 4, 6, 8}\n        };\n\n        int[][] inputs2 = {\n            {0, 2, 6, 8, 9},\n            {2, 3, 5},\n            {1, 3},\n            {2},\n            {1, 5, 7},\n            {1, 2, 3},\n            {4, 5, 6},\n            {1, 5},\n            {-2, 1, 4},\n            {1, 3, 5, 7}\n        };\n\n        int[][] expected = {\n            {0, 1, 2, 3, 5, 6, 7, 8, 9},\n            {1, 2, 3, 4, 5, 8},\n            {1, 2, 2, 3},\n            {1, 2},\n            {1, 2, 3, 5, 7, 8},\n            {1, 2, 3, 5, 10, 15},\n            {1, 2, 3, 4, 5, 6},\n            {1, 5, 10},\n            {-5, -2, 0, 1, 3, 4},\n            {1, 2, 3, 4, 5, 6, 7, 8}\n        };\n\n        int totalTestCases = inputs1.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] copy1 = inputs1[i].clone();\n            int[] copy2 = inputs2[i].clone();\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.mergeTwoSortedArrays(copy1, copy2);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[[\");\n            for(int j = 0; j < inputs1[i].length; j++) {\n                input.append(inputs1[i][j]);\n                if(j + 1 < inputs1[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"], [\");\n            for(int j = 0; j < inputs2[i].length; j++) {\n                input.append(inputs2[i][j]);\n                if(j + 1 < inputs2[i].length)\n                    input.append(\", \");\n            }\n            input.append(\"]]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n            if(actual != null) {\n                for(int j = 0; j < actual.length; j++) {\n                    actualOutput.append(actual[j]);\n                    if(j + 1 < actual.length)\n                        actualOutput.append(\", \");\n                }\n            }\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { nums1: [1, 3, 5, 7], nums2: [0, 2, 6, 8, 9], expected: [0, 1, 2, 3, 5, 6, 7, 8, 9] },\n    { nums1: [1, 4, 8], nums2: [2, 3, 5], expected: [1, 2, 3, 4, 5, 8] },\n    { nums1: [2, 2], nums2: [1, 3], expected: [1, 2, 2, 3] },\n    { nums1: [1], nums2: [2], expected: [1, 2] },\n    { nums1: [2, 3, 8], nums2: [1, 5, 7], expected: [1, 2, 3, 5, 7, 8] },\n    { nums1: [5, 10, 15], nums2: [1, 2, 3], expected: [1, 2, 3, 5, 10, 15] },\n    { nums1: [1, 2, 3], nums2: [4, 5, 6], expected: [1, 2, 3, 4, 5, 6] },\n    { nums1: [10], nums2: [1, 5], expected: [1, 5, 10] },\n    { nums1: [-5, 0, 3], nums2: [-2, 1, 4], expected: [-5, -2, 0, 1, 3, 4] },\n    { nums1: [2, 4, 6, 8], nums2: [1, 3, 5, 7], expected: [1, 2, 3, 4, 5, 6, 7, 8] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { nums1, nums2, expected } = testCases[i];\n    const copy1 = [...nums1];\n    const copy2 = [...nums2];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = mergeTwoSortedArrays(copy1, copy2);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [nums1, nums2],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 3, 5, 7], [0, 2, 6, 8, 9], [0, 1, 2, 3, 5, 6, 7, 8, 9]),\n    ([1, 4, 8], [2, 3, 5], [1, 2, 3, 4, 5, 8]),\n    ([2, 2], [1, 3], [1, 2, 2, 3]),\n    ([1], [2], [1, 2]),\n    ([2, 3, 8], [1, 5, 7], [1, 2, 3, 5, 7, 8]),\n    ([5, 10, 15], [1, 2, 3], [1, 2, 3, 5, 10, 15]),\n    ([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]),\n    ([10], [1, 5], [1, 5, 10]),\n    ([-5, 0, 3], [-2, 1, 4], [-5, -2, 0, 1, 3, 4]),\n    ([2, 4, 6, 8], [1, 3, 5, 7], [1, 2, 3, 4, 5, 6, 7, 8])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    nums1 = list(test_cases[i][0])\n    nums2 = list(test_cases[i][1])\n    expected = test_cases[i][2]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.mergeTwoSortedArrays(nums1, nums2)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [test_cases[i][0], test_cases[i][1]],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [[1, 3, 5, 7], [0, 2, 6, 8, 9]],
      "expectedOutput": [0, 1, 2, 3, 5, 6, 7, 8, 9],
      "isPublic": true
    },
    {
      "input": [[1, 4, 8], [2, 3, 5]],
      "expectedOutput": [1, 2, 3, 4, 5, 8],
      "isPublic": true
    },
    {
      "input": [[2, 2], [1, 3]],
      "expectedOutput": [1, 2, 2, 3],
      "isPublic": true
    },
    {
      "input": [[1], [2]],
      "expectedOutput": [1, 2],
      "isPublic": true
    },
    {
      "input": [[2, 3, 8], [1, 5, 7]],
      "expectedOutput": [1, 2, 3, 5, 7, 8],
      "isPublic": true
    },
    {
      "input": [[5, 10, 15], [1, 2, 3]],
      "expectedOutput": [1, 2, 3, 5, 10, 15],
      "isPublic": false
    },
    {
      "input": [[1, 2, 3], [4, 5, 6]],
      "expectedOutput": [1, 2, 3, 4, 5, 6],
      "isPublic": false
    },
    {
      "input": [[10], [1, 5]],
      "expectedOutput": [1, 5, 10],
      "isPublic": false
    },
    {
      "input": [[-5, 0, 3], [-2, 1, 4]],
      "expectedOutput": [-5, -2, 0, 1, 3, 4],
      "isPublic": false
    },
    {
      "input": [[2, 4, 6, 8], [1, 3, 5, 7]],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8],
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O((N + M) log(N + M)) or O(N + M)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["TCS", "Infosys", "Wipro", "Amazon", "Accenture"],
  "order": 11
}

]
// export default problems;