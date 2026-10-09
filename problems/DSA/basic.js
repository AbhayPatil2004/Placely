[
  {
    "title": "Calculate Total and Average of Three Numbers",
    "slug": "calculate-total-and-average-of-three-numbers",
    "problemStatement": "Given three integers a, b, and c, calculate and return their total and average.",
    "topic": "BASIC",
    "subTopics": [],
    "tags": ["arithmetic", "variables", "operators"],
    "pattern": ["BASIC_CALCULATION"],
    "difficulty": "EASY",
    "inputFormat": "The driver provides three integers a, b, and c for each test case.",
    "outputFormat": "Return an array containing the total of the three numbers followed by their integer average.",
    "constraints": [
      "-10^9 <= a, b, c <= 10^9"
    ],
    "examples": [
      {
        "input": "a = 10, b = 20, c = 30",
        "output": "[60,20]"
      },
      {
        "input": "a = -10, b = 20, c = 30",
        "output": "[40,13]"
      }
    ],
    "starterCode": {
      "cpp": "class Solution {\npublic:\n    vector<int> calculateTotalAndAverage(int a, int b, int c) {\n        // Write your code here\n        return {};\n    }\n};",
      "java": "class Solution {\n    public int[] calculateTotalAndAverage(int a, int b, int c) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "javascript": "var calculateTotalAndAverage = function(a, b, c) {\n    // Write your code here\n    return [];\n};",
      "python": "class Solution:\n    def calculateTotalAndAverage(self, a, b, c):\n        # Write your code here\n        return []"
    },
    "driverCode": {
      "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {10,20,30},\n        {5,10,15},\n        {1,2,3},\n        {-10,20,30},\n        {-5,-10,-15},\n        {100,200,300},\n        {0,0,0},\n        {7,7,7},\n        {-100,0,100},\n        {999999999,999999999,999999999}\n    };\n\n    vector<vector<int>> expected = {\n        {60,20},\n        {30,10},\n        {6,2},\n        {40,13},\n        {-30,-10},\n        {600,200},\n        {0,0},\n        {21,7},\n        {0,0},\n        {2999999997,999999999}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.calculateTotalAndAverage(\n                inputs[i][0],\n                inputs[i][1],\n                inputs[i][2]\n            );\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n\n        input += \"]\";\n\n        string expectedOutput = \"[\";\n\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
      "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {10,20,30},\n            {5,10,15},\n            {1,2,3},\n            {-10,20,30},\n            {-5,-10,-15},\n            {100,200,300},\n            {0,0,0},\n            {7,7,7},\n            {-100,0,100},\n            {999999999,999999999,999999999}\n        };\n\n        int[][] expected = {\n            {60,20},\n            {30,10},\n            {6,2},\n            {40,13},\n            {-30,-10},\n            {600,200},\n            {0,0},\n            {21,7},\n            {0,0},\n            {2999999997,999999999}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.calculateTotalAndAverage(\n                    inputs[i][0],\n                    inputs[i][1],\n                    inputs[i][2]\n                );\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n\n            input.append(\"]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n\n            for(int j = 0; j < actual.length; j++) {\n                actualOutput.append(actual[j]);\n\n                if(j + 1 < actual.length)\n                    actualOutput.append(\", \");\n            }\n\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                                      .replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
      "javascript": "const testCases = [\n    { a: 10, b: 20, c: 30, expected: [60,20] },\n    { a: 5, b: 10, c: 15, expected: [30,10] },\n    { a: 1, b: 2, c: 3, expected: [6,2] },\n    { a: -10, b: 20, c: 30, expected: [40,13] },\n    { a: -5, b: -10, c: -15, expected: [-30,-10] },\n    { a: 100, b: 200, c: 300, expected: [600,200] },\n    { a: 0, b: 0, c: 0, expected: [0,0] },\n    { a: 7, b: 7, c: 7, expected: [21,7] },\n    { a: -100, b: 0, c: 100, expected: [0,0] },\n    { a: 999999999, b: 999999999, c: 999999999, expected: [2999999997,999999999] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { a, b, c, expected } = testCases[i];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = calculateTotalAndAverage(a, b, c);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [a, b, c],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
      "python": "test_cases = [\n    ([10,20,30], [60,20]),\n    ([5,10,15], [30,10]),\n    ([1,2,3], [6,2]),\n    ([-10,20,30], [40,13]),\n    ([-5,-10,-15], [-30,-10]),\n    ([100,200,300], [600,200]),\n    ([0,0,0], [0,0]),\n    ([7,7,7], [21,7]),\n    ([-100,0,100], [0,0]),\n    ([999999999,999999999,999999999], [2999999997,999999999])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    inputs = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.calculateTotalAndAverage(\n            inputs[0],\n            inputs[1],\n            inputs[2]\n        )\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": inputs,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                             .replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
    },
    "testCases": [
      {
        "input": [10,20,30],
        "expectedOutput": [60,20],
        "isPublic": true
      },
      {
        "input": [5,10,15],
        "expectedOutput": [30,10],
        "isPublic": true
      },
      {
        "input": [1,2,3],
        "expectedOutput": [6,2],
        "isPublic": true
      },
      {
        "input": [-10,20,30],
        "expectedOutput": [40,13],
        "isPublic": true
      },
      {
        "input": [-5,-10,-15],
        "expectedOutput": [-30,-10],
        "isPublic": true
      },
      {
        "input": [100,200,300],
        "expectedOutput": [600,200],
        "isPublic": true
      },
      {
        "input": [0,0,0],
        "expectedOutput": [0,0],
        "isPublic": true
      },
      {
        "input": [7,7,7],
        "expectedOutput": [21,7],
        "isPublic": true
      },
      {
        "input": [-100,0,100],
        "expectedOutput": [0,0],
        "isPublic": true
      },
      {
        "input": [999999999,999999999,999999999],
        "expectedOutput": [2999999997,999999999],
        "isPublic": true
      }
    ],
    "supportedLanguages": [
      "cpp",
      "java",
      "javascript",
      "python"
    ],
    "expectedTimeComplexity": "O(1)",
    "expectedSpaceComplexity": "O(1)",
    "companies": [],
    "order": 1
  },
  {
  "title": "Swap Two Numbers",
  "slug": "swap-two-numbers",
  "problemStatement": "Given two integers a and b, swap their values and return the swapped values.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "swap"],
  "pattern": ["BASIC_MANIPULATION"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two integers a and b for each test case.",
  "outputFormat": "Return an array containing the value of b followed by the value of a after swapping.",
  "constraints": [
    "-10^9 <= a, b <= 10^9"
  ],
  "examples": [
    {
      "input": "a = 10, b = 20",
      "output": "[20,10]"
    },
    {
      "input": "a = -5, b = 10",
      "output": "[10,-5]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> swapNumbers(int a, int b) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] swapNumbers(int a, int b) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var swapNumbers = function(a, b) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def swapNumbers(self, a, b):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<vector<int>> inputs = {\n        {10,20},\n        {5,15},\n        {1,2},\n        {-5,10},\n        {-10,-20},\n        {100,200},\n        {0,10},\n        {10,0},\n        {7,7},\n        {-1000000000,1000000000}\n    };\n\n    vector<vector<int>> expected = {\n        {20,10},\n        {15,5},\n        {2,1},\n        {10,-5},\n        {-20,-10},\n        {200,100},\n        {10,0},\n        {0,10},\n        {7,7},\n        {1000000000,-1000000000}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.swapNumbers(inputs[i][0], inputs[i][1]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\";\n\n        for(int j = 0; j < inputs[i].size(); j++) {\n            input += to_string(inputs[i][j]);\n\n            if(j + 1 < inputs[i].size())\n                input += \", \";\n        }\n\n        input += \"]\";\n\n        string expectedOutput = \"[\";\n\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int[][] inputs = {\n            {10,20},\n            {5,15},\n            {1,2},\n            {-5,10},\n            {-10,-20},\n            {100,200},\n            {0,10},\n            {10,0},\n            {7,7},\n            {-1000000000,1000000000}\n        };\n\n        int[][] expected = {\n            {20,10},\n            {15,5},\n            {2,1},\n            {10,-5},\n            {-20,-10},\n            {200,100},\n            {10,0},\n            {0,10},\n            {7,7},\n            {1000000000,-1000000000}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.swapNumbers(inputs[i][0], inputs[i][1]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            StringBuilder input = new StringBuilder(\"[\");\n\n            for(int j = 0; j < inputs[i].length; j++) {\n                input.append(inputs[i][j]);\n\n                if(j + 1 < inputs[i].length)\n                    input.append(\", \");\n            }\n\n            input.append(\"]\");\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n\n            for(int j = 0; j < actual.length; j++) {\n                actualOutput.append(actual[j]);\n\n                if(j + 1 < actual.length)\n                    actualOutput.append(\", \");\n            }\n\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                                      .replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { a: 10, b: 20, expected: [20,10] },\n    { a: 5, b: 15, expected: [15,5] },\n    { a: 1, b: 2, expected: [2,1] },\n    { a: -5, b: 10, expected: [10,-5] },\n    { a: -10, b: -20, expected: [-20,-10] },\n    { a: 100, b: 200, expected: [200,100] },\n    { a: 0, b: 10, expected: [10,0] },\n    { a: 10, b: 0, expected: [0,10] },\n    { a: 7, b: 7, expected: [7,7] },\n    { a: -1000000000, b: 1000000000, expected: [1000000000,-1000000000] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { a, b, expected } = testCases[i];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = swapNumbers(a, b);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [a, b],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([10,20], [20,10]),\n    ([5,15], [15,5]),\n    ([1,2], [2,1]),\n    ([-5,10], [10,-5]),\n    ([-10,-20], [-20,-10]),\n    ([100,200], [200,100]),\n    ([0,10], [10,0]),\n    ([10,0], [0,10]),\n    ([7,7], [7,7]),\n    ([-1000000000,1000000000], [1000000000,-1000000000])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    inputs = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.swapNumbers(inputs[0], inputs[1])\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": inputs,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                             .replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [10,20],
      "expectedOutput": [20,10],
      "isPublic": true
    },
    {
      "input": [5,15],
      "expectedOutput": [15,5],
      "isPublic": true
    },
    {
      "input": [1,2],
      "expectedOutput": [2,1],
      "isPublic": true
    },
    {
      "input": [-5,10],
      "expectedOutput": [10,-5],
      "isPublic": true
    },
    {
      "input": [-10,-20],
      "expectedOutput": [-20,-10],
      "isPublic": true
    },
    {
      "input": [100,200],
      "expectedOutput": [200,100],
      "isPublic": true
    },
    {
      "input": [0,10],
      "expectedOutput": [10,0],
      "isPublic": true
    },
    {
      "input": [10,0],
      "expectedOutput": [0,10],
      "isPublic": true
    },
    {
      "input": [7,7],
      "expectedOutput": [7,7],
      "isPublic": true
    },
    {
      "input": [-1000000000,1000000000],
      "expectedOutput": [1000000000,-1000000000],
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [],
  "order": 2
},
{
  "title": "Calculate Area of a Rectangle",
  "slug": "calculate-area-of-a-rectangle",
  "problemStatement": "Given the length and width of a rectangle, calculate and return its area.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "arithmetic"],
  "pattern": ["BASIC_MANIPULATION"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two integers: length and width.",
  "outputFormat": "Return the area of the rectangle as length multiplied by width.",
  "constraints": [
    "1 <= length <= 1000000",
    "1 <= width <= 1000000"
  ],
  "examples": [
    {
      "input": "10 5",
      "output": "50"
    },
    {
      "input": "7 8",
      "output": "56"
    },
    {
      "input": "100 200",
      "output": "20000"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    long long calculateArea(long long length, long long width) {\n        // Write your code here\n    }\n};",
    "java": "class Solution {\n    public long calculateArea(long length, long width) {\n        // Write your code here\n    }\n}",
    "javascript": "class Solution {\n    calculateArea(length, width) {\n        // Write your code here\n    }\n}",
    "python": "class Solution:\n    def calculateArea(self, length, width):\n        # Write your code here\n        pass"
  },
  "driverCode": {
  "cpp": "int main() {\n    Solution solution;\n    int totalTestCases=10, passedTestCases=0;\n    vector<vector<int>> inputs={{10,5},{7,4},{1,1},{20,10},{12,8},{100,50},{3,9},{15,6},{25,4},{1000,2}};\n    vector<int> expected={50,28,1,200,96,5000,27,90,100,2000};\n    vector<string> testCasesResult;\n    for(int i=0;i<totalTestCases;i++){\n        int actual=0;string logs;stringstream buffer;streambuf* oldCout=cout.rdbuf(buffer.rdbuf());bool runtimeError=false;\n        try{actual=solution.calculateArea(inputs[i][0],inputs[i][1]);}catch(...){runtimeError=true;logs=\"Runtime error\";}\n        cout.rdbuf(oldCout);if(logs.empty())logs=buffer.str();bool passed=!runtimeError&&actual==expected[i];if(passed)passedTestCases++;\n        string status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");string input=\"[\"+to_string(inputs[i][0]) + \", \" + to_string(inputs[i][1])+\"]\";\n        testCasesResult.push_back(\"    {\\n      testCase: \"+to_string(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \"+to_string(expected[i])+\",\\n      actualOutput: \"+to_string(actual)+\",\\n      logs: \\\"\"+logs+\"\\\",\\n      status: \"+status+\"\\n    }\");\n    }\n    cout<<\"{\\n  totalTestCases: \"<<totalTestCases<<\",\\n  passedTestCases: \"<<passedTestCases<<\",\\n  testCasesResult: [\\n\";for(int i=0;i<testCasesResult.size();i++){cout<<testCasesResult[i];if(i+1<testCasesResult.size())cout<<\",\";cout<<\"\\n\";}cout<<\"  ]\\n}\\n\";return 0;\n}",

  "java": "public class Main {\n    public static void main(String[] args) {\n        Solution solution=new Solution();int totalTestCases=10,passedTestCases=0;\n        int[][] inputs={{10,5},{7,4},{1,1},{20,10},{12,8},{100,50},{3,9},{15,6},{25,4},{1000,2}};int[] expected={50,28,1,200,96,5000,27,90,100,2000};java.util.List<String> testCasesResult=new java.util.ArrayList<>();\n        for(int i=0;i<totalTestCases;i++){int actual=0;String logs=\"\";boolean runtimeError=false;java.io.ByteArrayOutputStream buffer=new java.io.ByteArrayOutputStream();java.io.PrintStream oldOut=System.out;System.setOut(new java.io.PrintStream(buffer));try{actual=solution.calculateArea(inputs[i][0],inputs[i][1]);}catch(Throwable e){runtimeError=true;logs=\"Runtime error\";}System.out.flush();System.setOut(oldOut);if(logs.isEmpty())logs=buffer.toString();boolean passed=!runtimeError&&actual==expected[i];if(passed)passedTestCases++;String status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");String input=\"[\"+inputs[i][0]+\", \"+inputs[i][1]+\"]\";testCasesResult.add(\"    {\\n      testCase: \"+(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \"+expected[i]+\",\\n      actualOutput: \"+actual+\",\\n      logs: \\\"\"+logs.replace(\"\\\"\",\"\\\\\\\"\").replace(\"\\n\",\"\\\\n\")+\"\\\",\\n      status: \"+status+\"\\n    }\");}\n        System.out.println(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(int i=0;i<testCasesResult.size();i++){System.out.print(testCasesResult.get(i));if(i+1<testCasesResult.size())System.out.print(\",\");System.out.println();}System.out.println(\"  ]\\n}\");\n    }\n}",

  "javascript": "const testCases=[{input:[10,5],expected:50},{input:[7,4],expected:28},{input:[1,1],expected:1},{input:[20,10],expected:200},{input:[12,8],expected:96},{input:[100,50],expected:5000},{input:[3,9],expected:27},{input:[15,6],expected:90},{input:[25,4],expected:100},{input:[1000,2],expected:2000}];let totalTestCases=10,passedTestCases=0;const testCasesResult=[];for(let i=0;i<totalTestCases;i++){let actual=0,logs=\"\",runtimeError=false;const oldConsoleLog=console.log,capturedLogs=[];console.log=(...args)=>capturedLogs.push(args.join(\" \"));try{actual=calculateArea(...testCases[i].input)}catch(e){runtimeError=true;logs=\"Runtime error\"}console.log=oldConsoleLog;if(logs===\"\")logs=capturedLogs.join(\"\\n\");const passed=!runtimeError&&actual===testCases[i].expected;if(passed)passedTestCases++;testCasesResult.push({testCase:i+1,input:testCases[i].input,expectedOutput:testCases[i].expected,actualOutput:actual,logs:logs,status:runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\")})}console.log(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(let i=0;i<testCasesResult.length;i++){const r=testCasesResult[i];console.log(\"    {\\n      testCase: \"+r.testCase+\",\\n      input: \"+JSON.stringify(r.input)+\",\\n      expectedOutput: \"+r.expectedOutput+\",\\n      actualOutput: \"+r.actualOutput+\",\\n      logs: \\\"\"+r.logs.replace(/\\\\/g,\"\\\\\\\\\").replace(/\\\"/g,'\\\\\\\"').replace(/\\n/g,\"\\\\n\")+\"\\\",\\n      status: \"+r.status+\"\\n    }\"+(i+1<testCasesResult.length?\",\":\"\"))}console.log(\"  ]\\n}\");",

  "python": "test_cases=[([10,5],50),([7,4],28),([1,1],1),([20,10],200),([12,8],96),([100,50],5000),([3,9],27),([15,6],90),([25,4],100),([1000,2],2000)];solution=Solution();totalTestCases=10;passedTestCases=0;testCasesResult=[]\nfor i in range(totalTestCases):\n    actual=0;logs=\"\";runtimeError=False\n    try:actual=solution.calculateArea(*test_cases[i][0])\n    except Exception:runtimeError=True;logs=\"Runtime error\"\n    expected=test_cases[i][1];passed=not runtimeError and actual==expected\n    if passed:passedTestCases+=1\n    testCasesResult.append({\"testCase\":i+1,\"input\":test_cases[i][0],\"expectedOutput\":expected,\"actualOutput\":actual,\"logs\":logs,\"status\":\"runtime_error\" if runtimeError else (\"passed\" if passed else \"wrong\")})\nprint(\"{\\n  totalTestCases: \"+str(totalTestCases)+\",\\n  passedTestCases: \"+str(passedTestCases)+\",\\n  testCasesResult: [\")\nfor i,r in enumerate(testCasesResult):print(\"    {\\n      testCase: \"+str(r[\"testCase\"])+\",\\n      input: \"+str(r[\"input\"])+\",\\n      expectedOutput: \"+str(r[\"expectedOutput\"])+\",\\n      actualOutput: \"+str(r[\"actualOutput\"])+\",\\n      logs: \\\"\"+r[\"logs\"]+\"\\\",\\n      status: \"+r[\"status\"]+\"\\n    }\"+(\",\" if i+1<len(testCasesResult) else \"\"))\nprint(\"  ]\\n}\")"
  },
  "testCases": [
    {
      "input": "10 5",
      "expectedOutput": "50",
      "isPublic": true
    },
    {
      "input": "7 8",
      "expectedOutput": "56",
      "isPublic": true
    },
    {
      "input": "100 200",
      "expectedOutput": "20000",
      "isPublic": true
    },
    {
      "input": "1 1",
      "expectedOutput": "1",
      "isPublic": true
    },
    {
      "input": "25 4",
      "expectedOutput": "100",
      "isPublic": true
    },
    {
      "input": "50 10",
      "expectedOutput": "500",
      "isPublic": true
    },
    {
      "input": "0 10",
      "expectedOutput": "0",
      "isPublic": true
    },
    {
      "input": "10 0",
      "expectedOutput": "0",
      "isPublic": true
    },
    {
      "input": "999 999",
      "expectedOutput": "998001",
      "isPublic": true
    },
    {
      "input": "1000000 1000000",
      "expectedOutput": "1000000000000",
      "isPublic": true
    }
  ],
  "supportedLanguages": ["cpp", "java", "javascript", "python"],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [],
  "order": 3
  },
  {
  "title": "Calculate Area of a Circle",
  "slug": "calculate-area-of-a-circle",
  "problemStatement": "Given the radius of a circle, calculate and return its area. Use π = 3.14.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "geometry"],
  "pattern": ["BASIC_MANIPULATION"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides the radius of the circle for each test case.",
  "outputFormat": "Return the area of the circle as a floating-point number.",
  "constraints": [
    "1 <= radius <= 10^6"
  ],
  "examples": [
    {
      "input": "radius = 5",
      "output": "78.5"
    },
    {
      "input": "radius = 10",
      "output": "314"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    double calculateArea(int radius) {\n        // Write your code here\n        return 0.0;\n    }\n};",
    "java": "class Solution {\n    public double calculateArea(int radius) {\n        // Write your code here\n        return 0.0;\n    }\n}",
    "javascript": "var calculateArea = function(radius) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def calculateArea(self, radius):\n        # Write your code here\n        return 0.0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> radius = {\n        5,\n        10,\n        1,\n        2,\n        7,\n        3,\n        4,\n        8,\n        12,\n        20\n    };\n\n    vector<double> expected = {\n        78.5,\n        314,\n        3.14,\n        12.56,\n        153.86,\n        28.26,\n        50.24,\n        200.96,\n        452.16,\n        1256\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        double actual = 0.0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.calculateArea(radius[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && abs(actual - expected[i]) < 0.001;\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + to_string(radius[i]) + \",\\n\"\n            \"      expectedOutput: \" + to_string(expected[i]) + \",\\n\"\n            \"      actualOutput: \" + to_string(actual) + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] radius = {\n            5,\n            10,\n            1,\n            2,\n            7,\n            3,\n            4,\n            8,\n            12,\n            20\n        };\n\n        double[] expected = {\n            78.5,\n            314,\n            3.14,\n            12.56,\n            153.86,\n            28.26,\n            50.24,\n            200.96,\n            452.16,\n            1256\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            double actual = 0.0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.calculateArea(radius[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && Math.abs(actual - expected[i]) < 0.001;\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + radius[i] + \",\\n\" +\n                \"      expectedOutput: \" + expected[i] + \",\\n\" +\n                \"      actualOutput: \" + actual + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { radius: 5, expected: 78.5 },\n    { radius: 10, expected: 314 },\n    { radius: 1, expected: 3.14 },\n    { radius: 2, expected: 12.56 },\n    { radius: 7, expected: 153.86 },\n    { radius: 3, expected: 28.26 },\n    { radius: 4, expected: 50.24 },\n    { radius: 8, expected: 200.96 },\n    { radius: 12, expected: 452.16 },\n    { radius: 20, expected: 1256 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const radius = testCases[i].radius;\n    const expected = testCases[i].expected;\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = calculateArea(radius);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && Math.abs(actual - expected) < 0.001;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: radius,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (5, 78.5),\n    (10, 314),\n    (1, 3.14),\n    (2, 12.56),\n    (7, 153.86),\n    (3, 28.26),\n    (4, 50.24),\n    (8, 200.96),\n    (12, 452.16),\n    (20, 1256)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    radius = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = 0.0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.calculateArea(radius)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and abs(actual - expected) < 0.001\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": radius,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": "5",
      "expectedOutput": "78.5",
      "isPublic": true
    },
    {
      "input": "10",
      "expectedOutput": "314",
      "isPublic": true
    },
    {
      "input": "1",
      "expectedOutput": "3.14",
      "isPublic": true
    },
    {
      "input": "2",
      "expectedOutput": "12.56",
      "isPublic": true
    },
    {
      "input": "7",
      "expectedOutput": "153.86",
      "isPublic": true
    },
    {
      "input": "3",
      "expectedOutput": "28.26",
      "isPublic": true
    },
    {
      "input": "4",
      "expectedOutput": "50.24",
      "isPublic": true
    },
    {
      "input": "8",
      "expectedOutput": "200.96",
      "isPublic": true
    },
    {
      "input": "12",
      "expectedOutput": "452.16",
      "isPublic": true
    },
    {
      "input": "20",
      "expectedOutput": "1256",
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [],
  "order": 4
  },
  {
  "title": "Convert Minutes into Hours and Minutes",
  "slug": "convert-minutes-into-hours-and-minutes",
  "problemStatement": "Given a total number of minutes, convert it into complete hours and remaining minutes.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "division", "modulo"],
  "pattern": ["BASIC_OPERATIONS"],
  "difficulty": "EASY",
  "inputFormat": "An integer representing total minutes.",
  "outputFormat": "Return an array containing hours and remaining minutes.",
  "constraints": ["0 <= minutes <= 10^6"],
  "examples": [
    {
      "input": "125",
      "output": "[2,5]"
    },
    {
      "input": "90",
      "output": "[1,30]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> convertMinutes(int minutes) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] convertMinutes(int minutes) {\n        // Write your code here\n        return new int[0];\n    }\n}",
    "javascript": "var convertMinutes = function(minutes) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def convertMinutes(self, minutes):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main(){Solution solution;int totalTestCases=10,passedTestCases=0;vector<int> inputs={125,60,90,45,120,135,200,0,61,1000};vector<vector<int>> expected={{2,5},{1,0},{1,30},{0,45},{2,0},{2,15},{3,20},{0,0},{1,1},{16,40}};vector<string> testCasesResult;for(int i=0;i<totalTestCases;i++){vector<int> actual;string logs;stringstream buffer;streambuf* oldCout=cout.rdbuf(buffer.rdbuf());bool runtimeError=false;try{actual=solution.convertMinutes(inputs[i]);}catch(...){runtimeError=true;logs=\"Runtime error\";}cout.rdbuf(oldCout);if(logs.empty())logs=buffer.str();bool passed=!runtimeError&&actual==expected[i];if(passed)passedTestCases++;string status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");string exp=\"[\"+to_string(expected[i][0]) + \", \" + to_string(expected[i][1])+\"]\";string act=actual.size()>=2?\"[\"+to_string(actual[0]) + \", \" + to_string(actual[1])+\"]\":\"[]\";testCasesResult.push_back(\"    {\\n      testCase: \"+to_string(i+1)+\",\\n      input: \"+to_string(inputs[i]) + \",\\n      expectedOutput: \"+exp+\",\\n      actualOutput: \"+act+\",\\n      logs: \\\"\"+logs+\"\\\",\\n      status: \"+status+\"\\n    }\");}cout<<\"{\\n  totalTestCases: \"<<totalTestCases<<\",\\n  passedTestCases: \"<<passedTestCases<<\",\\n  testCasesResult: [\\n\";for(int i=0;i<testCasesResult.size();i++){cout<<testCasesResult[i];if(i+1<testCasesResult.size())cout<<\",\";cout<<\"\\n\";}cout<<\"  ]\\n}\\n\";return 0;}",
    "java": "public class Main{public static void main(String[] args){Solution solution=new Solution();int totalTestCases=10,passedTestCases=0;int[] inputs={125,60,90,45,120,135,200,0,61,1000};int[][] expected={{2,5},{1,0},{1,30},{0,45},{2,0},{2,15},{3,20},{0,0},{1,1},{16,40}};java.util.List<String> testCasesResult=new java.util.ArrayList<>();for(int i=0;i<totalTestCases;i++){int[] actual=new int[0];String logs=\"\";boolean runtimeError=false;java.io.ByteArrayOutputStream buffer=new java.io.ByteArrayOutputStream();java.io.PrintStream oldOut=System.out;System.setOut(new java.io.PrintStream(buffer));try{actual=solution.convertMinutes(inputs[i]);}catch(Throwable e){runtimeError=true;logs=\"Runtime error\";}System.out.flush();System.setOut(oldOut);if(logs.isEmpty())logs=buffer.toString();boolean passed=!runtimeError&&actual.length==2&&actual[0]==expected[i][0]&&actual[1]==expected[i][1];if(passed)passedTestCases++;String status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");String exp=\"[\"+expected[i][0]+\", \"+expected[i][1]+\"]\",act=actual.length>=2?\"[\"+actual[0]+\", \"+actual[1]+\"]\":\"[]\";testCasesResult.add(\"    {\\n      testCase: \"+(i+1)+\",\\n      input: \"+inputs[i]+\",\\n      expectedOutput: \"+exp+\",\\n      actualOutput: \"+act+\",\\n      logs: \\\"\"+logs.replace(\"\\\"\",\"\\\\\\\"\").replace(\"\\n\",\"\\\\n\")+\"\\\",\\n      status: \"+status+\"\\n    }\");}System.out.println(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(int i=0;i<testCasesResult.size();i++){System.out.print(testCasesResult.get(i));if(i+1<testCasesResult.size())System.out.print(\",\");System.out.println();}System.out.println(\"  ]\\n}\");}}",
    "javascript": "const testCases=[{input:125,expected:[2,5]},{input:60,expected:[1,0]},{input:90,expected:[1,30]},{input:45,expected:[0,45]},{input:120,expected:[2,0]},{input:135,expected:[2,15]},{input:200,expected:[3,20]},{input:0,expected:[0,0]},{input:61,expected:[1,1]},{input:1000,expected:[16,40]}];let totalTestCases=10,passedTestCases=0;const testCasesResult=[];for(let i=0;i<totalTestCases;i++){let actual=[],logs=\"\",runtimeError=false;const oldConsoleLog=console.log,capturedLogs=[];console.log=(...args)=>capturedLogs.push(args.join(\" \"));try{actual=convertMinutes(testCases[i].input)}catch(e){runtimeError=true;logs=\"Runtime error\"}console.log=oldConsoleLog;if(logs===\"\")logs=capturedLogs.join(\"\\n\");const expected=testCases[i].expected;const passed=!runtimeError&&Array.isArray(actual)&&actual.length===2&&actual[0]===expected[0]&&actual[1]===expected[1];if(passed)passedTestCases++;testCasesResult.push({testCase:i+1,input:testCases[i].input,expectedOutput:expected,actualOutput:actual,logs:logs,status:runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\")})}console.log(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(let i=0;i<testCasesResult.length;i++){const r=testCasesResult[i];console.log(\"    {\\n      testCase: \"+r.testCase+\",\\n      input: \"+r.input+\",\\n      expectedOutput: \"+JSON.stringify(r.expectedOutput)+\",\\n      actualOutput: \"+JSON.stringify(r.actualOutput)+\",\\n      logs: \\\"\"+r.logs.replace(/\\\\/g,\"\\\\\\\\\").replace(/\\\"/g,'\\\\\"').replace(/\\n/g,\"\\\\n\")+\"\\\",\\n      status: \"+r.status+\"\\n    }\"+(i+1<testCasesResult.length?\",\":\"\"))}console.log(\"  ]\\n}\");",
    "python": "test_cases=[(125,[2,5]),(60,[1,0]),(90,[1,30]),(45,[0,45]),(120,[2,0]),(135,[2,15]),(200,[3,20]),(0,[0,0]),(61,[1,1]),(1000,[16,40])];solution=Solution();totalTestCases=10;passedTestCases=0;testCasesResult=[]\nfor i in range(totalTestCases):\n    actual=[];logs=\"\";runtimeError=False\n    try:actual=solution.convertMinutes(test_cases[i][0])\n    except Exception:runtimeError=True;logs=\"Runtime error\"\n    expected=test_cases[i][1];passed=not runtimeError and actual==expected\n    if passed:passedTestCases+=1\n    testCasesResult.append({\"testCase\":i+1,\"input\":test_cases[i][0],\"expectedOutput\":expected,\"actualOutput\":actual,\"logs\":logs,\"status\":\"runtime_error\" if runtimeError else (\"passed\" if passed else \"wrong\")})\nprint(\"{\\n  totalTestCases: \"+str(totalTestCases)+\",\\n  passedTestCases: \"+str(passedTestCases)+\",\\n  testCasesResult: [\")\nfor i,r in enumerate(testCasesResult):print(\"    {\\n      testCase: \"+str(r[\"testCase\"])+\",\\n      input: \"+str(r[\"input\"])+\",\\n      expectedOutput: \"+str(r[\"expectedOutput\"])+\",\\n      actualOutput: \"+str(r[\"actualOutput\"])+\",\\n      logs: \\\"\"+r[\"logs\"]+\"\\\",\\n      status: \"+r[\"status\"]+\"\\n    }\"+(\",\" if i+1<len(testCasesResult) else \"\"))\nprint(\"  ]\\n}\")"
  },
  "testCases": [
    {
      "input": 125,
      "expectedOutput": [2,5],
      "isPublic": true
    },
    {
      "input": 60,
      "expectedOutput": [1,0],
      "isPublic": true
    },
    {
      "input": 90,
      "expectedOutput": [1,30],
      "isPublic": true
    },
    {
      "input": 45,
      "expectedOutput": [0,45],
      "isPublic": true
    },
    {
      "input": 120,
      "expectedOutput": [2,0],
      "isPublic": true
    },
    {
      "input": 135,
      "expectedOutput": [2,15],
      "isPublic": true
    },
    {
      "input": 200,
      "expectedOutput": [3,20],
      "isPublic": true
    },
    {
      "input": 0,
      "expectedOutput": [0,0],
      "isPublic": true
    },
    {
      "input": 61,
      "expectedOutput": [1,1],
      "isPublic": true
    },
    {
      "input": 1000,
      "expectedOutput": [16,40],
      "isPublic": true
    }
  ],
  "supportedLanguages": ["cpp","java","javascript","python"],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [],
  "order": 5
  },
  {
  "title": "Convert Seconds into Hours, Minutes and Seconds",
  "slug": "convert-seconds-into-hours-minutes-and-seconds",
  "problemStatement": "Given a total number of seconds, convert it into hours, minutes and remaining seconds.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "division", "modulo"],
  "pattern": ["BASIC_OPERATIONS"],
  "difficulty": "EASY",
  "inputFormat": "An integer representing total seconds.",
  "outputFormat": "Return an array containing hours, minutes and seconds.",
  "constraints": ["0 <= seconds <= 10^6"],
  "examples": [
    {"input":"3665","output":"[1,1,5]"},
    {"input":"125","output":"[0,2,5]"}
  ],
  "starterCode": {
    "cpp":"class Solution {\npublic:\n    vector<int> convertSeconds(int seconds) {\n        // Write your code here\n        return {};\n    }\n};",
    "java":"class Solution {\n    public int[] convertSeconds(int seconds) {\n        // Write your code here\n        return new int[0];\n    }\n}",
    "javascript":"var convertSeconds = function(seconds) {\n    // Write your code here\n    return [];\n};",
    "python":"class Solution:\n    def convertSeconds(self, seconds):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp":"int main(){Solution solution;int totalTestCases=10,passedTestCases=0;vector<int> inputs={3665,3600,60,61,125,3605,7200,0,7325,10000};vector<vector<int>> expected={{1,1,5},{1,0,0},{0,1,0},{0,1,1},{0,2,5},{1,0,5},{2,0,0},{0,0,0},{2,2,5},{2,46,40}};vector<string> testCasesResult;for(int i=0;i<totalTestCases;i++){vector<int> actual;string logs;stringstream buffer;streambuf* oldCout=cout.rdbuf(buffer.rdbuf());bool runtimeError=false;try{actual=solution.convertSeconds(inputs[i]);}catch(...){runtimeError=true;logs=\"Runtime error\";}cout.rdbuf(oldCout);if(logs.empty())logs=buffer.str();bool passed=!runtimeError&&actual==expected[i];if(passed)passedTestCases++;string status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");string exp=\"[\"+to_string(expected[i][0])+\", \"+to_string(expected[i][1]) + \", \"+to_string(expected[i][2])+\"]\";string act=actual.size()>=3?\"[\"+to_string(actual[0]) + \", \"+to_string(actual[1]) + \", \"+to_string(actual[2])+\"]\":\"[]\";testCasesResult.push_back(\"    {\n      testCase: \"+to_string(i+1)+\",\n      input: \"+to_string(inputs[i]) + \",\n      expectedOutput: \"+exp+\",\n      actualOutput: \"+act+\",\n      logs: \\\"\"+logs+\"\\\",\n      status: \"+status+\"\n    }\");}cout<<\"{\n  totalTestCases: \"<<totalTestCases<<\",\n  passedTestCases: \"<<passedTestCases<<\",\n  testCasesResult: [\n\";for(int i=0;i<testCasesResult.size();i++){cout<<testCasesResult[i];if(i+1<testCasesResult.size())cout<<\",\";cout<<\"\n\";}cout<<\"  ]\n}\n\";return 0;}",
    "java":"public class Main{public static void main(String[] args){Solution solution=new Solution();int totalTestCases=10,passedTestCases=0;int[] inputs={3665,3600,60,61,125,3605,7200,0,7325,10000};int[][] expected={{1,1,5},{1,0,0},{0,1,0},{0,1,1},{0,2,5},{1,0,5},{2,0,0},{0,0,0},{2,2,5},{2,46,40}};java.util.List<String> testCasesResult=new java.util.ArrayList<>();for(int i=0;i<totalTestCases;i++){int[] actual=new int[0];String logs=\"\";boolean runtimeError=false;java.io.ByteArrayOutputStream buffer=new java.io.ByteArrayOutputStream();java.io.PrintStream oldOut=System.out;System.setOut(new java.io.PrintStream(buffer));try{actual=solution.convertSeconds(inputs[i]);}catch(Throwable e){runtimeError=true;logs=\"Runtime error\";}System.out.flush();System.setOut(oldOut);if(logs.isEmpty())logs=buffer.toString();boolean passed=!runtimeError&&actual.length==3&&actual[0]==expected[i][0]&&actual[1]==expected[i][1]&&actual[2]==expected[i][2];if(passed)passedTestCases++;String status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");String exp=\"[\"+expected[i][0]+\", \"+expected[i][1]+\", \"+expected[i][2]+\"]\",act=actual.length>=3?\"[\"+actual[0]+\", \"+actual[1]+\", \"+actual[2]+\"]\":\"[]\";testCasesResult.add(\"    {\n      testCase: \"+(i+1)+\",\n      input: \"+inputs[i]+\",\n      expectedOutput: \"+exp+\",\n      actualOutput: \"+act+\",\n      logs: \\\"\"+logs.replace(\"\\\"\",\"\\\\\\\"\").replace(\"\\n\",\"\\\\n\")+\"\\\",\n      status: \"+status+\"\n    }\");}System.out.println(\"{\n  totalTestCases: \"+totalTestCases+\",\n  passedTestCases: \"+passedTestCases+\",\n  testCasesResult: [\");for(int i=0;i<testCasesResult.size();i++){System.out.print(testCasesResult.get(i));if(i+1<testCasesResult.size())System.out.print(\",\");System.out.println();}System.out.println(\"  ]\n}\");}}",
    "javascript":"const testCases=[{input:3665,expected:[1,1,5]},{input:3600,expected:[1,0,0]},{input:60,expected:[0,1,0]},{input:61,expected:[0,1,1]},{input:125,expected:[0,2,5]},{input:3605,expected:[1,0,5]},{input:7200,expected:[2,0,0]},{input:0,expected:[0,0,0]},{input:7325,expected:[2,2,5]},{input:10000,expected:[2,46,40]}];let totalTestCases=10,passedTestCases=0;const testCasesResult=[];for(let i=0;i<totalTestCases;i++){let actual=[],logs=\"\",runtimeError=false;const oldConsoleLog=console.log,capturedLogs=[];console.log=(...args)=>capturedLogs.push(args.join(\" \"));try{actual=convertSeconds(testCases[i].input)}catch(e){runtimeError=true;logs=\"Runtime error\"}console.log=oldConsoleLog;if(logs===\"\")logs=capturedLogs.join(\"\\n\");const expected=testCases[i].expected;const passed=!runtimeError&&Array.isArray(actual)&&actual.length===3&&actual[0]===expected[0]&&actual[1]===expected[1]&&actual[2]===expected[2];if(passed)passedTestCases++;testCasesResult.push({testCase:i+1,input:testCases[i].input,expectedOutput:expected,actualOutput:actual,logs:logs,status:runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\")})}console.log(\"{\n  totalTestCases: \"+totalTestCases+\",\n  passedTestCases: \"+passedTestCases+\",\n  testCasesResult: [\");for(let i=0;i<testCasesResult.length;i++){const r=testCasesResult[i];console.log(\"    {\n      testCase: \"+r.testCase+\",\n      input: \"+r.input+\",\n      expectedOutput: \"+JSON.stringify(r.expectedOutput)+\",\n      actualOutput: \"+JSON.stringify(r.actualOutput)+\",\n      logs: \\\"\"+r.logs.replace(/\\/g,\"\\\\\").replace(/\"/g,'\\\"').replace(/\n/g,\"\\n\")+\"\\\",\n      status: \"+r.status+\"\n    }\"+(i+1<testCasesResult.length?\",\":\"\"))}console.log(\"  ]\n}\");",
    "python":"test_cases=[(3665,[1,1,5]),(3600,[1,0,0]),(60,[0,1,0]),(61,[0,1,1]),(125,[0,2,5]),(3605,[1,0,5]),(7200,[2,0,0]),(0,[0,0,0]),(7325,[2,2,5]),(10000,[2,46,40])];solution=Solution();totalTestCases=10;passedTestCases=0;testCasesResult=[]\nfor i in range(totalTestCases):\n    actual=[];logs=\"\";runtimeError=False\n    try:actual=solution.convertSeconds(test_cases[i][0])\n    except Exception:runtimeError=True;logs=\"Runtime error\"\n    expected=test_cases[i][1];passed=not runtimeError and actual==expected\n    if passed:passedTestCases+=1\n    testCasesResult.append({\"testCase\":i+1,\"input\":test_cases[i][0],\"expectedOutput\":expected,\"actualOutput\":actual,\"logs\":logs,\"status\":\"runtime_error\" if runtimeError else (\"passed\" if passed else \"wrong\")})\nprint(\"{\n  totalTestCases: \"+str(totalTestCases)+\",\n  passedTestCases: \"+str(passedTestCases)+\",\n  testCasesResult: [\")\nfor i,r in enumerate(testCasesResult):print(\"    {\n      testCase: \"+str(r[\"testCase\"])+\",\n      input: \"+str(r[\"input\"])+\",\n      expectedOutput: \"+str(r[\"expectedOutput\"])+\",\n      actualOutput: \"+str(r[\"actualOutput\"])+\",\n      logs: \\\"\"+r[\"logs\"]+\"\\\",\n      status: \"+r[\"status\"]+\"\n    }\"+(\",\" if i+1<len(testCasesResult) else \"\"))\nprint(\"  ]\n}\")"
  },
  "testCases": [
    {"input":3665,"expectedOutput":[1,1,5],"isPublic":true},
    {"input":3600,"expectedOutput":[1,0,0],"isPublic":true},
    {"input":60,"expectedOutput":[0,1,0],"isPublic":true},
    {"input":61,"expectedOutput":[0,1,1],"isPublic":true},
    {"input":125,"expectedOutput":[0,2,5],"isPublic":true},
    {"input":3605,"expectedOutput":[1,0,5],"isPublic":true},
    {"input":7200,"expectedOutput":[2,0,0],"isPublic":true},
    {"input":0,"expectedOutput":[0,0,0],"isPublic":true},
    {"input":7325,"expectedOutput":[2,2,5],"isPublic":true},
    {"input":10000,"expectedOutput":[2,46,40],"isPublic":true}
  ],
  "supportedLanguages":["cpp","java","javascript","python"],
  "expectedTimeComplexity":"O(1)",
  "expectedSpaceComplexity":"O(1)",
  "companies":[],
  "order":6
  },
  {
  "title": "Calculate Amount After Discount",
  "slug": "calculate-amount-after-discount",
  "problemStatement": "Given the original price of an item and the discount percentage, calculate the final amount after applying the discount.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "arithmetic", "percentage", "discount"],
  "pattern": ["BASIC_OPERATIONS"],
  "difficulty": "EASY",
  "inputFormat": "Two numbers representing the original price and discount percentage.",
  "outputFormat": "Return the final amount after applying the discount as a floating-point number.",
  "constraints": [
    "0 <= price <= 10^6",
    "0 <= discount <= 100"
  ],
  "examples": [
    {"input":"1000,10","output":"900"},
    {"input":"500,20","output":"400"}
  ],
  "starterCode": {
    "cpp":"class Solution {\npublic:\n    double calculateDiscount(double price, double discount) {\n        // Write your code here\n        return 0.0;\n    }\n};",
    "java":"class Solution {\n    public double calculateDiscount(double price, double discount) {\n        // Write your code here\n        return 0.0;\n    }\n}",
    "javascript":"var calculateDiscount = function(price, discount) {\n    // Write your code here\n    return 0;\n};",
    "python":"class Solution:\n    def calculateDiscount(self, price, discount):\n        # Write your code here\n        return 0.0"
  },
  "driverCode": {
    "cpp":"int main(){Solution solution;int totalTestCases=10,passedTestCases=0;vector<vector<double>> inputs={{1000,10},{500,20},{100,0},{100,50},{2000,25},{750,10},{1200,15},{10000,30},{250,40},{999,5}};vector<double> expected={900,400,100,50,1500,675,1020,7000,150,949.05};vector<string> testCasesResult;for(int i=0;i<totalTestCases;i++){double actual=0;string logs;stringstream buffer;streambuf* oldCout=cout.rdbuf(buffer.rdbuf());bool runtimeError=false;try{actual=solution.calculateDiscount(inputs[i][0],inputs[i][1]);}catch(...){runtimeError=true;logs=\"Runtime error\";}cout.rdbuf(oldCout);if(logs.empty())logs=buffer.str();bool passed=!runtimeError&&abs(actual-expected[i])<0.001;if(passed)passedTestCases++;string status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");string input=\"[\"+to_string(inputs[i][0])+\", \"+to_string(inputs[i][1])+\"]\";testCasesResult.push_back(\"    {\\n      testCase: \"+to_string(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \"+to_string(expected[i])+\",\\n      actualOutput: \"+to_string(actual)+\",\\n      logs: \\\"\"+logs+\"\\\",\\n      status: \"+status+\"\\n    }\");}cout<<\"{\\n  totalTestCases: \"<<totalTestCases<<\",\\n  passedTestCases: \"<<passedTestCases<<\",\\n  testCasesResult: [\\n\";for(int i=0;i<testCasesResult.size();i++){cout<<testCasesResult[i];if(i+1<testCasesResult.size())cout<<\",\";cout<<\"\\n\";}cout<<\"  ]\\n}\\n\";return 0;}",
    "java":"public class Main{public static void main(String[] args){Solution solution=new Solution();int totalTestCases=10,passedTestCases=0;double[][] inputs={{1000,10},{500,20},{100,0},{100,50},{2000,25},{750,10},{1200,15},{10000,30},{250,40},{999,5}};double[] expected={900,400,100,50,1500,675,1020,7000,150,949.05};java.util.List<String> testCasesResult=new java.util.ArrayList<>();for(int i=0;i<totalTestCases;i++){double actual=0;String logs=\"\";boolean runtimeError=false;java.io.ByteArrayOutputStream buffer=new java.io.ByteArrayOutputStream();java.io.PrintStream oldOut=System.out;System.setOut(new java.io.PrintStream(buffer));try{actual=solution.calculateDiscount(inputs[i][0],inputs[i][1]);}catch(Throwable e){runtimeError=true;logs=\"Runtime error\";}System.out.flush();System.setOut(oldOut);if(logs.isEmpty())logs=buffer.toString();boolean passed=!runtimeError&&Math.abs(actual-expected[i])<0.001;if(passed)passedTestCases++;String status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");String input=\"[\"+inputs[i][0]+\", \"+inputs[i][1]+\"]\";testCasesResult.add(\"    {\\n      testCase: \"+(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \"+expected[i]+\",\\n      actualOutput: \"+actual+\",\\n      logs: \\\"\"+logs.replace(\"\\\"\",\"\\\\\\\"\").replace(\"\\n\",\"\\\\n\")+\"\\\",\\n      status: \"+status+\"\\n    }\");}System.out.println(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(int i=0;i<testCasesResult.size();i++){System.out.print(testCasesResult.get(i));if(i+1<testCasesResult.size())System.out.print(\",\");System.out.println();}System.out.println(\"  ]\\n}\");}}",
    "javascript":"const testCases=[{input:[1000,10],expected:900},{input:[500,20],expected:400},{input:[100,0],expected:100},{input:[100,50],expected:50},{input:[2000,25],expected:1500},{input:[750,10],expected:675},{input:[1200,15],expected:1020},{input:[10000,30],expected:7000},{input:[250,40],expected:150},{input:[999,5],expected:949.05}];let totalTestCases=10,passedTestCases=0;const testCasesResult=[];for(let i=0;i<totalTestCases;i++){let actual=0,logs=\"\",runtimeError=false;const oldConsoleLog=console.log,capturedLogs=[];console.log=(...args)=>capturedLogs.push(args.join(\" \"));try{actual=calculateDiscount(...testCases[i].input)}catch(e){runtimeError=true;logs=\"Runtime error\"}console.log=oldConsoleLog;if(logs===\"\")logs=capturedLogs.join(\"\\n\");const expected=testCases[i].expected;const passed=!runtimeError&&Math.abs(actual-expected)<0.001;if(passed)passedTestCases++;testCasesResult.push({testCase:i+1,input:testCases[i].input,expectedOutput:expected,actualOutput:actual,logs:logs,status:runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\")})}console.log(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(let i=0;i<testCasesResult.length;i++){const r=testCasesResult[i];console.log(\"    {\\n      testCase: \"+r.testCase+\",\\n      input: \"+JSON.stringify(r.input)+\",\\n      expectedOutput: \"+r.expectedOutput+\",\\n      actualOutput: \"+r.actualOutput+\",\\n      logs: \\\"\"+r.logs.replace(/\\\\/g,\"\\\\\\\\\").replace(/\"/g,'\\\\\"').replace(/\\n/g,\"\\\\n\")+\"\\\",\\n      status: \"+r.status+\"\\n    }\"+(i+1<testCasesResult.length?\",\":\"\"))}console.log(\"  ]\\n}\");",
    "python":"test_cases=[([1000,10],900),([500,20],400),([100,0],100),([100,50],50),([2000,25],1500),([750,10],675),([1200,15],1020),([10000,30],7000),([250,40],150),([999,5],949.05)];solution=Solution();totalTestCases=10;passedTestCases=0;testCasesResult=[]\nfor i in range(totalTestCases):\n    actual=0.0;logs=\"\";runtimeError=False\n    try:actual=solution.calculateDiscount(*test_cases[i][0])\n    except Exception:runtimeError=True;logs=\"Runtime error\"\n    expected=test_cases[i][1];passed=not runtimeError and abs(actual-expected)<0.001\n    if passed:passedTestCases+=1\n    testCasesResult.append({\"testCase\":i+1,\"input\":test_cases[i][0],\"expectedOutput\":expected,\"actualOutput\":actual,\"logs\":logs,\"status\":\"runtime_error\" if runtimeError else (\"passed\" if passed else \"wrong\")})\nprint(\"{\\n  totalTestCases: \"+str(totalTestCases)+\",\\n  passedTestCases: \"+str(passedTestCases)+\",\\n  testCasesResult: [\")\nfor i,r in enumerate(testCasesResult):print(\"    {\\n      testCase: \"+str(r[\"testCase\"])+\",\\n      input: \"+str(r[\"input\"])+\",\\n      expectedOutput: \"+str(r[\"expectedOutput\"])+\",\\n      actualOutput: \"+str(r[\"actualOutput\"])+\",\\n      logs: \\\"\"+r[\"logs\"]+\"\\\",\\n      status: \"+r[\"status\"]+\"\\n    }\"+(\",\" if i+1<len(testCasesResult) else \"\"))\nprint(\"  ]\\n}\")"
  },
  "testCases": [
    {"input":[1000,10],"expectedOutput":900,"isPublic":true},
    {"input":[500,20],"expectedOutput":400,"isPublic":true},
    {"input":[100,0],"expectedOutput":100,"isPublic":true},
    {"input":[100,50],"expectedOutput":50,"isPublic":true},
    {"input":[2000,25],"expectedOutput":1500,"isPublic":true},
    {"input":[750,10],"expectedOutput":675,"isPublic":true},
    {"input":[1200,15],"expectedOutput":1020,"isPublic":true},
    {"input":[10000,30],"expectedOutput":7000,"isPublic":true},
    {"input":[250,40],"expectedOutput":150,"isPublic":true},
    {"input":[999,5],"expectedOutput":949.05,"isPublic":true}
  ],
  "supportedLanguages":["cpp","java","javascript","python"],
  "expectedTimeComplexity":"O(1)",
  "expectedSpaceComplexity":"O(1)",
  "companies":[],
  "order":7
},
{
  "title": "Check Even or Odd",
  "slug": "check-even-or-odd",
  "problemStatement": "Given an integer `n`, determine whether the number is even or odd. Return \"Even\" if the number is even, and \"Odd\" if the number is odd.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "conditionals", "modulo", "arithmetic"],
  "pattern": ["BASIC_OPERATIONS"],
  "difficulty": "BASIC",
  "inputFormat": "A single integer n.",
  "outputFormat": "Return a string - \"Even\" or \"Odd\".",
  "constraints": [
    "-10^9 <= n <= 10^9"
  ],
  "examples": [
    {"input": "4", "output": "\"Even\""},
    {"input": "7", "output": "\"Odd\""}
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string checkEvenOrOdd(int n) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String checkEvenOrOdd(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var checkEvenOrOdd = function(n) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def checkEvenOrOdd(self, n: int) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main(){Solution solution;int totalTestCases=10,passedTestCases=0;vector<int> inputs={4,7,0,-2,-5,100,999,-1000,-9999,1000000000};vector<string> expected={\"Even\",\"Odd\",\"Even\",\"Even\",\"Odd\",\"Even\",\"Odd\",\"Even\",\"Odd\",\"Even\"};vector<string> testCasesResult;for(int i=0;i<totalTestCases;i++){string actual=\"\";string logs;stringstream buffer;streambuf* oldCout=cout.rdbuf(buffer.rdbuf());bool runtimeError=false;try{actual=solution.checkEvenOrOdd(inputs[i]);}catch(...){runtimeError=true;logs=\"Runtime error\";}cout.rdbuf(oldCout);if(logs.empty())logs=buffer.str();bool passed=!runtimeError&&actual==expected[i];if(passed)passedTestCases++;string status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");string input=\"[\"+to_string(inputs[i])+\"]\";testCasesResult.push_back(\"    {\\n      testCase: \"+to_string(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \\\"\"+expected[i]+\"\\\",\\n      actualOutput: \\\"\"+actual+\"\\\",\\n      logs: \\\"\"+logs+\"\\\",\\n      status: \"+status+\"\\n    }\");}cout<<\"{\\n  totalTestCases: \"<<totalTestCases<<\",\\n  passedTestCases: \"<<passedTestCases<<\",\\n  testCasesResult: [\\n\";for(int i=0;i<testCasesResult.size();i++){cout<<testCasesResult[i];if(i+1<testCasesResult.size())cout<<\",\";cout<<\"\\n\";}cout<<\"  ]\\n}\\n\";return 0;}",
    "java": "public class Main{public static void main(String[] args){Solution solution=new Solution();int totalTestCases=10,passedTestCases=0;int[] inputs={4,7,0,-2,-5,100,999,-1000,-9999,1000000000};String[] expected={\"Even\",\"Odd\",\"Even\",\"Even\",\"Odd\",\"Even\",\"Odd\",\"Even\",\"Odd\",\"Even\"};java.util.List<String> testCasesResult=new java.util.ArrayList<>();for(int i=0;i<totalTestCases;i++){String actual=\"\";String logs=\"\";boolean runtimeError=false;java.io.ByteArrayOutputStream buffer=new java.io.ByteArrayOutputStream();java.io.PrintStream oldOut=System.out;System.setOut(new java.io.PrintStream(buffer));try{actual=solution.checkEvenOrOdd(inputs[i]);}catch(Throwable e){runtimeError=true;logs=\"Runtime error\";}System.out.flush();System.setOut(oldOut);if(logs.isEmpty())logs=buffer.toString();boolean passed=!runtimeError&&expected[i].equals(actual);if(passed)passedTestCases++;String status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");String input=\"[\"+inputs[i]+\"]\";testCasesResult.add(\"    {\\n      testCase: \"+(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \\\"\"+expected[i]+\"\\\",\\n      actualOutput: \\\"\"+actual+\"\\\",\\n      logs: \\\"\"+logs.replace(\"\\\"\",\"\\\\\\\"\").replace(\"\\n\",\"\\\\n\")+\"\\\",\\n      status: \"+status+\"\\n    }\");}System.out.println(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(int i=0;i<testCasesResult.size();i++){System.out.print(testCasesResult.get(i));if(i+1<testCasesResult.size())System.out.print(\",\");System.out.println();}System.out.println(\"  ]\\n}\");}}",
    "javascript": "const testCases=[{input:[4],expected:\"Even\"},{input:[7],expected:\"Odd\"},{input:[0],expected:\"Even\"},{input:[-2],expected:\"Even\"},{input:[-5],expected:\"Odd\"},{input:[100],expected:\"Even\"},{input:[999],expected:\"Odd\"},{input:[-1000],expected:\"Even\"},{input:[-9999],expected:\"Odd\"},{input:[1000000000],expected:\"Even\"}];let totalTestCases=10,passedTestCases=0;const testCasesResult=[];for(let i=0;i<totalTestCases;i++){let actual=\"\",logs=\"\",runtimeError=false;const oldConsoleLog=console.log,capturedLogs=[];console.log=(...args)=>capturedLogs.push(args.join(\" \"));try{actual=checkEvenOrOdd(...testCases[i].input)}catch(e){runtimeError=true;logs=\"Runtime error\"}console.log=oldConsoleLog;if(logs===\"\")logs=capturedLogs.join(\"\\n\");const expected=testCases[i].expected;const passed=!runtimeError&&actual===expected;if(passed)passedTestCases++;testCasesResult.push({testCase:i+1,input:testCases[i].input,expectedOutput:expected,actualOutput:actual,logs:logs,status:runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\")})}console.log(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(let i=0;i<testCasesResult.length;i++){const r=testCasesResult[i];console.log(\"    {\\n      testCase: \"+r.testCase+\",\\n      input: \"+JSON.stringify(r.input)+\",\\n      expectedOutput: \\\"\"+r.expectedOutput+\"\\\",\\n      actualOutput: \\\"\"+r.actualOutput+\"\\\",\\n      logs: \\\"\"+r.logs.replace(/\\\\/g,\"\\\\\\\\\").replace(/\"/g,'\\\\\"').replace(/\\n/g,\"\\\\n\")+\"\\\",\\n      status: \"+r.status+\"\\n    }\"+(i+1<testCasesResult.length?\",\":\"\"))}console.log(\"  ]\\n}\");",
    "python": "test_cases=[([4],\"Even\"),([7],\"Odd\"),([0],\"Even\"),([-2],\"Even\"),([-5],\"Odd\"),([100],\"Even\"),([999],\"Odd\"),([-1000],\"Even\"),([-9999],\"Odd\"),([1000000000],\"Even\")];solution=Solution();totalTestCases=10;passedTestCases=0;testCasesResult=[]\nfor i in range(totalTestCases):\n    actual=\"\";logs=\"\";runtimeError=False\n    try:actual=solution.checkEvenOrOdd(*test_cases[i][0])\n    except Exception:runtimeError=True;logs=\"Runtime error\"\n    expected=test_cases[i][1];passed=not runtimeError and actual==expected\n    if passed:passedTestCases+=1\n    testCasesResult.append({\"testCase\":i+1,\"input\":test_cases[i][0],\"expectedOutput\":expected,\"actualOutput\":actual,\"logs\":logs,\"status\":\"runtime_error\" if runtimeError else (\"passed\" if passed else \"wrong\")})\nprint(\"{\\n  totalTestCases: \"+str(totalTestCases)+\",\\n  passedTestCases: \"+str(passedTestCases)+\",\\n  testCasesResult: [\")\nfor i,r in enumerate(testCasesResult):print(\"    {\\n      testCase: \"+str(r[\"testCase\"])+\",\\n      input: \"+str(r[\"input\"])+\",\\n      expectedOutput: \\\"\"+str(r[\"expectedOutput\"])+\"\\\",\\n      actualOutput: \\\"\"+str(r[\"actualOutput\"])+\"\\\",\\n      logs: \\\"\"+r[\"logs\"]+\"\\\",\\n      status: \"+r[\"status\"]+\"\\n    }\"+(\",\" if i+1<len(testCasesResult) else \"\"))\nprint(\"  ]\\n}\")"
  },
  "testCases": [
    {"input": [4], "expectedOutput": "Even", "isPublic": true},
    {"input": [7], "expectedOutput": "Odd", "isPublic": true},
    {"input": [0], "expectedOutput": "Even", "isPublic": true},
    {"input": [-2], "expectedOutput": "Even", "isPublic": true},
    {"input": [-5], "expectedOutput": "Odd", "isPublic": true},
    {"input": [100], "expectedOutput": "Even", "isPublic": false},
    {"input": [999], "expectedOutput": "Odd", "isPublic": false},
    {"input": [-1000], "expectedOutput": "Even", "isPublic": false},
    {"input": [-9999], "expectedOutput": "Odd", "isPublic": false},
    {"input": [1000000000], "expectedOutput": "Even", "isPublic": false}
  ],
  "supportedLanguages": ["cpp", "java", "javascript", "python"],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [],
  "order": 8
  },
  {
  "title": "Check Positive, Negative or Zero",
  "slug": "check-positive-negative-or-zero",
  "problemStatement": "Given an integer `n`, determine whether the number is positive, negative, or zero. Return \"Positive\" if `n > 0`, \"Negative\" if `n < 0`, and \"Zero\" if `n == 0`.",
  "topic": "BASIC",
  "subTopics": [],
  "tags": ["variables", "operators", "conditionals", "numbers"],
  "pattern": ["BASIC_OPERATIONS"],
  "difficulty": "EASY",
  "inputFormat": "A single integer n.",
  "outputFormat": "Return a string - \"Positive\", \"Negative\", or \"Zero\".",
  "constraints": [
    "-10^9 <= n <= 10^9"
  ],
  "examples": [
    {"input": "5", "output": "\"Positive\""},
    {"input": "-3", "output": "\"Negative\""},
    {"input": "0", "output": "\"Zero\""}
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string checkNumber(int n) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String checkNumber(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var checkNumber = function(n) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def checkNumber(self, n: int) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main(){Solution solution;int totalTestCases=10,passedTestCases=0;vector<int> inputs={5,-3,0,100,-50,1,-1,1000000000,-1000000000,0};vector<string> expected={\"Positive\",\"Negative\",\"Zero\",\"Positive\",\"Negative\",\"Positive\",\"Negative\",\"Positive\",\"Negative\",\"Zero\"};vector<string> testCasesResult;for(int i=0;i<totalTestCases;i++){string actual=\"\";string logs;stringstream buffer;streambuf* oldCout=cout.rdbuf(buffer.rdbuf());bool runtimeError=false;try{actual=solution.checkNumber(inputs[i]);}catch(...){runtimeError=true;logs=\"Runtime error\";}cout.rdbuf(oldCout);if(logs.empty())logs=buffer.str();bool passed=!runtimeError&&actual==expected[i];if(passed)passedTestCases++;string status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");string input=\"[\"+to_string(inputs[i])+\"]\";testCasesResult.push_back(\"    {\\n      testCase: \"+to_string(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \\\"\"+expected[i]+\"\\\",\\n      actualOutput: \\\"\"+actual+\"\\\",\\n      logs: \\\"\"+logs+\"\\\",\\n      status: \"+status+\"\\n    }\");}cout<<\"{\\n  totalTestCases: \"<<totalTestCases<<\",\\n  passedTestCases: \"<<passedTestCases<<\",\\n  testCasesResult: [\\n\";for(int i=0;i<testCasesResult.size();i++){cout<<testCasesResult[i];if(i+1<testCasesResult.size())cout<<\",\";cout<<\"\\n\";}cout<<\"  ]\\n}\\n\";return 0;}",
    "java": "public class Main{public static void main(String[] args){Solution solution=new Solution();int totalTestCases=10,passedTestCases=0;int[] inputs={5,-3,0,100,-50,1,-1,1000000000,-1000000000,0};String[] expected={\"Positive\",\"Negative\",\"Zero\",\"Positive\",\"Negative\",\"Positive\",\"Negative\",\"Positive\",\"Negative\",\"Zero\"};java.util.List<String> testCasesResult=new java.util.ArrayList<>();for(int i=0;i<totalTestCases;i++){String actual=\"\";String logs=\"\";boolean runtimeError=false;java.io.ByteArrayOutputStream buffer=new java.io.ByteArrayOutputStream();java.io.PrintStream oldOut=System.out;System.setOut(new java.io.PrintStream(buffer));try{actual=solution.checkNumber(inputs[i]);}catch(Throwable e){runtimeError=true;logs=\"Runtime error\";}System.out.flush();System.setOut(oldOut);if(logs.isEmpty())logs=buffer.toString();boolean passed=!runtimeError&&expected[i].equals(actual);if(passed)passedTestCases++;String status=runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\");String input=\"[\"+inputs[i]+\"]\";testCasesResult.add(\"    {\\n      testCase: \"+(i+1)+\",\\n      input: \"+input+\",\\n      expectedOutput: \\\"\"+expected[i]+\"\\\",\\n      actualOutput: \\\"\"+actual+\"\\\",\\n      logs: \\\"\"+logs.replace(\"\\\"\",\"\\\\\\\"\").replace(\"\\n\",\"\\\\n\")+\"\\\",\\n      status: \"+status+\"\\n    }\");}System.out.println(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(int i=0;i<testCasesResult.size();i++){System.out.print(testCasesResult.get(i));if(i+1<testCasesResult.size())System.out.print(\",\");System.out.println();}System.out.println(\"  ]\\n}\");}}",
    "javascript": "const testCases=[{input:[5],expected:\"Positive\"},{input:[-3],expected:\"Negative\"},{input:[0],expected:\"Zero\"},{input:[100],expected:\"Positive\"},{input:[-50],expected:\"Negative\"},{input:[1],expected:\"Positive\"},{input:[-1],expected:\"Negative\"},{input:[1000000000],expected:\"Positive\"},{input:[-1000000000],expected:\"Negative\"},{input:[0],expected:\"Zero\"}];let totalTestCases=10,passedTestCases=0;const testCasesResult=[];for(let i=0;i<totalTestCases;i++){let actual=\"\",logs=\"\",runtimeError=false;const oldConsoleLog=console.log,capturedLogs=[];console.log=(...args)=>capturedLogs.push(args.join(\" \"));try{actual=checkNumber(...testCases[i].input)}catch(e){runtimeError=true;logs=\"Runtime error\"}console.log=oldConsoleLog;if(logs===\"\")logs=capturedLogs.join(\"\\n\");const expected=testCases[i].expected;const passed=!runtimeError&&actual===expected;if(passed)passedTestCases++;testCasesResult.push({testCase:i+1,input:testCases[i].input,expectedOutput:expected,actualOutput:actual,logs:logs,status:runtimeError?\"runtime_error\":(passed?\"passed\":\"wrong\")})}console.log(\"{\\n  totalTestCases: \"+totalTestCases+\",\\n  passedTestCases: \"+passedTestCases+\",\\n  testCasesResult: [\");for(let i=0;i<testCasesResult.length;i++){const r=testCasesResult[i];console.log(\"    {\\n      testCase: \"+r.testCase+\",\\n      input: \"+JSON.stringify(r.input)+\",\\n      expectedOutput: \\\"\"+r.expectedOutput+\"\\\",\\n      actualOutput: \\\"\"+r.actualOutput+\"\\\",\\n      logs: \\\"\"+r.logs.replace(/\\\\/g,\"\\\\\\\\\").replace(/\"/g,'\\\\\"').replace(/\\n/g,\"\\\\n\")+\"\\\",\\n      status: \"+r.status+\"\\n    }\"+(i+1<testCasesResult.length?\",\":\"\"))}console.log(\"  ]\\n}\");",
    "python": "test_cases=[([5],\"Positive\"),([-3],\"Negative\"),([0],\"Zero\"),([100],\"Positive\"),([-50],\"Negative\"),([1],\"Positive\"),([-1],\"Negative\"),([1000000000],\"Positive\"),([-1000000000],\"Negative\"),([0],\"Zero\")];solution=Solution();totalTestCases=10;passedTestCases=0;testCasesResult=[]\nfor i in range(totalTestCases):\n    actual=\"\";logs=\"\";runtimeError=False\n    try:actual=solution.checkNumber(*test_cases[i][0])\n    except Exception:runtimeError=True;logs=\"Runtime error\"\n    expected=test_cases[i][1];passed=not runtimeError and actual==expected\n    if passed:passedTestCases+=1\n    testCasesResult.append({\"testCase\":i+1,\"input\":test_cases[i][0],\"expectedOutput\":expected,\"actualOutput\":actual,\"logs\":logs,\"status\":\"runtime_error\" if runtimeError else (\"passed\" if passed else \"wrong\")})\nprint(\"{\\n  totalTestCases: \"+str(totalTestCases)+\",\\n  passedTestCases: \"+str(passedTestCases)+\",\\n  testCasesResult: [\")\nfor i,r in enumerate(testCasesResult):print(\"    {\\n      testCase: \"+str(r[\"testCase\"])+\",\\n      input: \"+str(r[\"input\"])+\",\\n      expectedOutput: \\\"\"+str(r[\"expectedOutput\"])+\"\\\",\\n      actualOutput: \\\"\"+str(r[\"actualOutput\"])+\"\\\",\\n      logs: \\\"\"+r[\"logs\"]+\"\\\",\\n      status: \"+r[\"status\"]+\"\\n    }\"+(\",\" if i+1<len(testCasesResult) else \"\"))\nprint(\"  ]\\n}\")"
  },
  "testCases": [
    {"input": [5], "expectedOutput": "Positive", "isPublic": true},
    {"input": [-3], "expectedOutput": "Negative", "isPublic": true},
    {"input": [0], "expectedOutput": "Zero", "isPublic": true},
    {"input": [100], "expectedOutput": "Positive", "isPublic": true},
    {"input": [-50], "expectedOutput": "Negative", "isPublic": true},
    {"input": [1], "expectedOutput": "Positive", "isPublic": false},
    {"input": [-1], "expectedOutput": "Negative", "isPublic": false},
    {"input": [1000000000], "expectedOutput": "Positive", "isPublic": false},
    {"input": [-1000000000], "expectedOutput": "Negative", "isPublic": false},
    {"input": [0], "expectedOutput": "Zero", "isPublic": false}
  ],
  "supportedLanguages": ["cpp", "java", "javascript", "python"],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [],
  "order": 9
  },
  {
  "title": "Check Whether a Number is Divisible by 5 and 11",
  "slug": "check-whether-a-number-is-divisible-by-5-and-11",
  "problemStatement": "Given an integer n, check whether it is divisible by both 5 and 11. Return true (or 1) if it is divisible by both, otherwise return false (or 0).",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "conditionals",
    "math"
  ],
  "pattern": [
    "CONDITIONAL_LOGIC"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer n for each test case.",
  "outputFormat": "Return true if n is divisible by both 5 and 11, otherwise return false.",
  "constraints": [
    "-10^9 <= n <= 10^9"
  ],
  "examples": [
    {
      "input": "n = 55",
      "output": "true"
    },
    {
      "input": "n = 50",
      "output": "false"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isDivisibleBy5And11(int n) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isDivisibleBy5And11(int n) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isDivisibleBy5And11 = function(n) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isDivisibleBy5And11(self, n: int) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> nums = {\n        55,\n        50,\n        110,\n        0,\n        -55,\n        22,\n        5,\n        -110,\n        12345,\n        550\n    };\n\n    vector<bool> expected = {\n        true,\n        false,\n        true,\n        true,\n        true,\n        false,\n        false,\n        true,\n        false,\n        true\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.isDivisibleBy5And11(nums[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(nums[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \" + (expected[i] ? \"true\" : \"false\") + \",\\n\"\n            \"      actualOutput: \" + (actual ? \"true\" : \"false\") + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] nums = {\n            55,\n            50,\n            110,\n            0,\n            -55,\n            22,\n            5,\n            -110,\n            12345,\n            550\n        };\n\n        boolean[] expected = {\n            true,\n            false,\n            true,\n            true,\n            true,\n            false,\n            false,\n            true,\n            false,\n            true\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isDivisibleBy5And11(nums[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + nums[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \" + expected[i] + \",\\n\" +\n                \"      actualOutput: \" + actual + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 55, expected: true },\n    { n: 50, expected: false },\n    { n: 110, expected: true },\n    { n: 0, expected: true },\n    { n: -55, expected: true },\n    { n: 22, expected: false },\n    { n: 5, expected: false },\n    { n: -110, expected: true },\n    { n: 12345, expected: false },\n    { n: 550, expected: true }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = false;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = Boolean(isDivisibleBy5And11(n));\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (55, True),\n    (50, False),\n    (110, True),\n    (0, True),\n    (-55, True),\n    (22, False),\n    (5, False),\n    (-110, True),\n    (12345, False),\n    (550, True)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = False\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = bool(solution.isDivisibleBy5And11(n))\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower(),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [55],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [50],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [110],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [-55],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [22],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [5],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [-110],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [12345],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [550],
      "expectedOutput": true,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 10
  },
  {
  "title": "Check Whether a Year is a Leap Year",
  "slug": "check-whether-a-year-is-a-leap-year",
  "problemStatement": "Given an integer year, determine whether it is a leap year. A year is a leap year if it is divisible by 4, except for end-of-century years, which must be divisible by 400. This means that the year 1900 was not a leap year, but the year 2000 was. Return true (or 1) if it is a leap year, otherwise return false (or 0).",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "conditionals",
    "math"
  ],
  "pattern": [
    "CONDITIONAL_LOGIC"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer year for each test case.",
  "outputFormat": "Return true if the year is a leap year, otherwise return false.",
  "constraints": [
    "1 <= year <= 10^5"
  ],
  "examples": [
    {
      "input": "year = 2024",
      "output": "true"
    },
    {
      "input": "year = 1900",
      "output": "false"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isLeapYear = function(year) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isLeapYear(self, year: int) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> years = {\n        2024,\n        1900,\n        2000,\n        2023,\n        2100,\n        2004,\n        1600,\n        1800,\n        2020,\n        2026\n    };\n\n    vector<bool> expected = {\n        true,\n        false,\n        true,\n        false,\n        false,\n        true,\n        true,\n        false,\n        true,\n        false\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.isLeapYear(years[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"year = \" + to_string(years[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \" + (expected[i] ? \"true\" : \"false\") + \",\\n\"\n            \"      actualOutput: \" + (actual ? \"true\" : \"false\") + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] years = {\n            2024,\n            1900,\n            2000,\n            2023,\n            2100,\n            2004,\n            1600,\n            1800,\n            2020,\n            2026\n        };\n\n        boolean[] expected = {\n            true,\n            false,\n            true,\n            false,\n            false,\n            true,\n            true,\n            false,\n            true,\n            false\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isLeapYear(years[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"year = \" + years[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \" + expected[i] + \",\\n\" +\n                \"      actualOutput: \" + actual + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { year: 2024, expected: true },\n    { year: 1900, expected: false },\n    { year: 2000, expected: true },\n    { year: 2023, expected: false },\n    { year: 2100, expected: false },\n    { year: 2004, expected: true },\n    { year: 1600, expected: true },\n    { year: 1800, expected: false },\n    { year: 2020, expected: true },\n    { year: 2026, expected: false }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { year, expected } = testCases[i];\n\n    let actual = false;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = Boolean(isLeapYear(year));\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `year = ${year}`,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (2024, True),\n    (1900, False),\n    (2000, True),\n    (2023, False),\n    (2100, False),\n    (2004, True),\n    (1600, True),\n    (1800, False),\n    (2020, True),\n    (2026, False)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    year, expected = test_cases[i]\n\n    actual = False\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = bool(solution.isLeapYear(year))\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"year = {year}\",\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower(),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [2024],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [1900],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [2000],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [2023],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [2100],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [2004],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [1600],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [1800],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [2020],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [2026],
      "expectedOutput": false,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Wipro"
  ],
  "order": 11
  },
  {
  "title": "Check Whether a Character is an Alphabet, Digit or Special Character",
  "slug": "check-whether-a-character-is-an-alphabet-digit-or-special-character",
  "problemStatement": "Given a character ch, determine whether it is an alphabet (uppercase or lowercase letter), a digit ('0'-'9'), or a special character. Return \"Alphabet\", \"Digit\", or \"Special Character\" accordingly.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "conditionals",
    "strings",
    "math"
  ],
  "pattern": [
    "CONDITIONAL_LOGIC"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a character ch for each test case.",
  "outputFormat": "Return \"Alphabet\" if ch is a letter, \"Digit\" if ch is a number character, or \"Special Character\" for any other character.",
  "constraints": [
    "ch is a valid ASCII character"
  ],
  "examples": [
    {
      "input": "ch = 'a'",
      "output": "\"Alphabet\""
    },
    {
      "input": "ch = '7'",
      "output": "\"Digit\""
    },
    {
      "input": "ch = '@'",
      "output": "\"Special Character\""
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string checkCharType(char ch) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String checkCharType(char ch) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var checkCharType = function(ch) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def checkCharType(self, ch: str) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<char> inputs = {\n        'a',\n        '7',\n        '@',\n        'Z',\n        '0',\n        '#',\n        'm',\n        '9',\n        '$',\n        ' '\n    };\n\n    vector<string> expected = {\n        \"Alphabet\",\n        \"Digit\",\n        \"Special Character\",\n        \"Alphabet\",\n        \"Digit\",\n        \"Special Character\",\n        \"Alphabet\",\n        \"Digit\",\n        \"Special Character\",\n        \"Special Character\"\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        string actual = \"\";\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.checkCharType(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"ch = '\" + string(1, inputs[i]) + \"'\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actual + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        char[] inputs = {\n            'a',\n            '7',\n            '@',\n            'Z',\n            '0',\n            '#',\n            'm',\n            '9',\n            '$',\n            ' '\n        };\n\n        String[] expected = {\n            \"Alphabet\",\n            \"Digit\",\n            \"Special Character\",\n            \"Alphabet\",\n            \"Digit\",\n            \"Special Character\",\n            \"Alphabet\",\n            \"Digit\",\n            \"Special Character\",\n            \"Special Character\"\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            String actual = \"\";\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.checkCharType(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && expected[i].equals(actual);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"ch = '\" + inputs[i] + \"'\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { ch: 'a', expected: \"Alphabet\" },\n    { ch: '7', expected: \"Digit\" },\n    { ch: '@', expected: \"Special Character\" },\n    { ch: 'Z', expected: \"Alphabet\" },\n    { ch: '0', expected: \"Digit\" },\n    { ch: '#', expected: \"Special Character\" },\n    { ch: 'm', expected: \"Alphabet\" },\n    { ch: '9', expected: \"Digit\" },\n    { ch: '$', expected: \"Special Character\" },\n    { ch: ' ', expected: \"Special Character\" }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { ch, expected } = testCases[i];\n\n    let actual = \"\";\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = checkCharType(ch);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `ch = '${ch}'`,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ('a', \"Alphabet\"),\n    ('7', \"Digit\"),\n    ('@', \"Special Character\"),\n    ('Z', \"Alphabet\"),\n    ('0', \"Digit\"),\n    ('#', \"Special Character\"),\n    ('m', \"Alphabet\"),\n    ('9', \"Digit\"),\n    ('$', \"Special Character\"),\n    (' ', \"Special Character\")\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    ch, expected = test_cases[i]\n\n    actual = \"\"\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.checkCharType(ch)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"ch = '{ch}'\",\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\");"
  },
  "testCases": [
    {
      "input": ["a"],
      "expectedOutput": "Alphabet",
      "isPublic": true
    },
    {
      "input": ["7"],
      "expectedOutput": "Digit",
      "isPublic": true
    },
    {
      "input": ["@"],
      "expectedOutput": "Special Character",
      "isPublic": true
    },
    {
      "input": ["Z"],
      "expectedOutput": "Alphabet",
      "isPublic": true
    },
    {
      "input": ["0"],
      "expectedOutput": "Digit",
      "isPublic": true
    },
    {
      "input": ["#"],
      "expectedOutput": "Special Character",
      "isPublic": true
    },
    {
      "input": ["m"],
      "expectedOutput": "Alphabet",
      "isPublic": true
    },
    {
      "input": ["9"],
      "expectedOutput": "Digit",
      "isPublic": true
    },
    {
      "input": ["$"],
      "expectedOutput": "Special Character",
      "isPublic": true
    },
    {
      "input": [" "],
      "expectedOutput": "Special Character",
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 12
  },
  {
  "title": "Design Simple Calculator",
  "slug": "design-simple-calculator",
  "problemStatement": "Given two numbers a and b, and a character operator op, perform the basic arithmetic operation specified by op ('+', '-', '*', '/'). Return the result as a floating point number (double/float). For division, if b is 0, return -1.0.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "conditionals",
    "math"
  ],
  "pattern": [
    "CONDITIONAL_LOGIC"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two numbers a and b, and a character op ('+', '-', '*', '/') for each test case.",
  "outputFormat": "Return the calculated result as a double/float. If operator is '/' and b is 0, return -1.0.",
  "constraints": [
    "-10^4 <= a, b <= 10^4",
    "op is one of '+', '-', '*', '/'"
  ],
  "examples": [
    {
      "input": "a = 10, b = 5, op = '+'",
      "output": "15.0"
    },
    {
      "input": "a = 10, b = 2, op = '/'",
      "output": "5.0"
    },
    {
      "input": "a = 10, b = 0, op = '/'",
      "output": "-1.0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    double calculate(double a, double b, char op) {\n        // Write your code here\n        return 0.0;\n    }\n};",
    "java": "class Solution {\n    public double calculate(double a, double b, char op) {\n        // Write your code here\n        return 0.0;\n    }\n}",
    "javascript": "var calculate = function(a, b, op) {\n    // Write your code here\n    return 0.0;\n};",
    "python": "class Solution:\n    def calculate(self, a: float, b: float, op: str) -> float:\n        # Write your code here\n        return 0.0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<double> a = {10, 20, 5, 10, 7, 15, -10, 0, 100, 12};\n    vector<double> b = {5, 4, 3, 0, 2, 3, 5, 10, 25, 4};\n    vector<char> op = {'+', '-', '*', '/', '*', '/', '+', '-', '/', '*'};\n\n    vector<double> expected = {\n        15.0,\n        16.0,\n        15.0,\n        -1.0,\n        14.0,\n        5.0,\n        -5.0,\n        -10.0,\n        4.0,\n        48.0\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        double actual = 0.0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.calculate(a[i], b[i], op[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (abs(actual - expected[i]) < 1e-6);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"a = \" + to_string(a[i]) + \", b = \" + to_string(b[i]) + \", op = '\" + string(1, op[i]) + \"'\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \" + to_string(expected[i]) + \",\\n\"\n            \"      actualOutput: \" + to_string(actual) + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        double[] a = {10, 20, 5, 10, 7, 15, -10, 0, 100, 12};\n        double[] b = {5, 4, 3, 0, 2, 3, 5, 10, 25, 4};\n        char[] op = {'+', '-', '*', '/', '*', '/', '+', '-', '/', '*'};\n\n        double[] expected = {\n            15.0,\n            16.0,\n            15.0,\n            -1.0,\n            14.0,\n            5.0,\n            -5.0,\n            -10.0,\n            4.0,\n            48.0\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            double actual = 0.0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.calculate(a[i], b[i], op[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && Math.abs(actual - expected[i]) < 1e-6;\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"a = \" + a[i] + \", b = \" + b[i] + \", op = '\" + op[i] + \"'\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \" + expected[i] + \",\\n\" +\n                \"      actualOutput: \" + actual + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { a: 10, b: 5, op: '+', expected: 15.0 },\n    { a: 20, b: 4, op: '-', expected: 16.0 },\n    { a: 5, b: 3, op: '*', expected: 15.0 },\n    { a: 10, b: 0, op: '/', expected: -1.0 },\n    { a: 7, b: 2, op: '*', expected: 14.0 },\n    { a: 15, b: 3, op: '/', expected: 5.0 },\n    { a: -10, b: 5, op: '+', expected: -5.0 },\n    { a: 0, b: 10, op: '-', expected: -10.0 },\n    { a: 100, b: 25, op: '/', expected: 4.0 },\n    { a: 12, b: 4, op: '*', expected: 48.0 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { a, b, op, expected } = testCases[i];\n\n    let actual = 0.0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = Number(calculate(a, b, op));\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && Math.abs(actual - expected) < 1e-6;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `a = ${a}, b = ${b}, op = '${op}'`,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (10.0, 5.0, '+', 15.0),\n    (20.0, 4.0, '-', 16.0),\n    (5.0, 3.0, '*', 15.0),\n    (10.0, 0.0, '/', -1.0),\n    (7.0, 2.0, '*', 14.0),\n    (15.0, 3.0, '/', 5.0),\n    (-10.0, 5.0, '+', -5.0),\n    (0.0, 10.0, '-', -10.0),\n    (100.0, 25.0, '/', 4.0),\n    (12.0, 4.0, '*', 48.0)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    a, b, op, expected = test_cases[i]\n\n    actual = 0.0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = float(solution.calculate(a, b, op))\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and abs(actual - expected) < 1e-6\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"a = {a}, b = {b}, op = '{op}'\",\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [10.0, 5.0, "+"],
      "expectedOutput": 15.0,
      "isPublic": true
    },
    {
      "input": [20.0, 4.0, "-"],
      "expectedOutput": 16.0,
      "isPublic": true
    },
    {
      "input": [5.0, 3.0, "*"],
      "expectedOutput": 15.0,
      "isPublic": true
    },
    {
      "input": [10.0, 0.0, "/"],
      "expectedOutput": -1.0,
      "isPublic": true
    },
    {
      "input": [7.0, 2.0, "*"],
      "expectedOutput": 14.0,
      "isPublic": true
    },
    {
      "input": [15.0, 3.0, "/"],
      "expectedOutput": 5.0,
      "isPublic": true
    },
    {
      "input": [-10.0, 5.0, "+"],
      "expectedOutput": -5.0,
      "isPublic": true
    },
    {
      "input": [0.0, 10.0, "-"],
      "expectedOutput": -10.0,
      "isPublic": true
    },
    {
      "input": [100.0, 25.0, "/"],
      "expectedOutput": 4.0,
      "isPublic": true
    },
    {
      "input": [12.0, 4.0, "*"],
      "expectedOutput": 48.0,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Accenture",
    "Wipro"
  ],
  "order": 13
  },
  {
  "title": "Print Numbers from 1 to N",
  "slug": "print-numbers-from-1-to-n",
  "problemStatement": "Given an integer n, return an array or list containing all integers from 1 to n in ascending order.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "loops",
    "math",
    "arrays"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer n for each test case.",
  "outputFormat": "Return an array or list of integers containing numbers from 1 to n.",
  "constraints": [
    "1 <= n <= 10^4"
  ],
  "examples": [
    {
      "input": "n = 5",
      "output": "[1, 2, 3, 4, 5]"
    },
    {
      "input": "n = 1",
      "output": "[1]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> printNos(int n) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] printNos(int n) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var printNos = function(n) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def printNos(self, n: int) -> list[int]:\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        5,\n        1,\n        10,\n        2,\n        7,\n        15,\n        20,\n        3,\n        12,\n        8\n    };\n\n    vector<vector<int>> expected = {\n        {1, 2, 3, 4, 5},\n        {1},\n        {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n        {1, 2},\n        {1, 2, 3, 4, 5, 6, 7},\n        {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15},\n        {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20},\n        {1, 2, 3},\n        {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12},\n        {1, 2, 3, 4, 5, 6, 7, 8}\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> actual;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.printNos(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n\n        auto vectorToString = [](const vector<int>& vec) {\n            string res = \"[\";\n            for(size_t j = 0; j < vec.size(); j++) {\n                res += to_string(vec[j]);\n                if(j + 1 < vec.size()) res += \", \";\n            }\n            res += \"]\";\n            return res;\n        };\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + vectorToString(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + vectorToString(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            5,\n            1,\n            10,\n            2,\n            7,\n            15,\n            20,\n            3,\n            12,\n            8\n        };\n\n        int[][] expected = {\n            {1, 2, 3, 4, 5},\n            {1},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n            {1, 2},\n            {1, 2, 3, 4, 5, 6, 7},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20},\n            {1, 2, 3},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12},\n            {1, 2, 3, 4, 5, 6, 7, 8}\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] actual = null;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.printNos(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + java.util.Arrays.toString(expected[i]) + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + java.util.Arrays.toString(actual) + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 5, expected: [1, 2, 3, 4, 5] },\n    { n: 1, expected: [1] },\n    { n: 10, expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },\n    { n: 2, expected: [1, 2] },\n    { n: 7, expected: [1, 2, 3, 4, 5, 6, 7] },\n    { n: 15, expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },\n    { n: 20, expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },\n    { n: 3, expected: [1, 2, 3] },\n    { n: 12, expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },\n    { n: 8, expected: [1, 2, 3, 4, 5, 6, 7, 8] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = printNos(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && JSON.stringify(actual) === JSON.stringify(expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (5, [1, 2, 3, 4, 5]),\n    (1, [1]),\n    (10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),\n    (2, [1, 2]),\n    (7, [1, 2, 3, 4, 5, 6, 7]),\n    (15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),\n    (20, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),\n    (3, [1, 2, 3]),\n    (12, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),\n    (8, [1, 2, 3, 4, 5, 6, 7, 8])\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.printNos(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [5],
      "expectedOutput": [1, 2, 3, 4, 5],
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": [1],
      "isPublic": true
    },
    {
      "input": [10],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "isPublic": true
    },
    {
      "input": [2],
      "expectedOutput": [1, 2],
      "isPublic": true
    },
    {
      "input": [7],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7],
      "isPublic": true
    },
    {
      "input": [15],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "isPublic": true
    },
    {
      "input": [20],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      "isPublic": true
    },
    {
      "input": [3],
      "expectedOutput": [1, 2, 3],
      "isPublic": true
    },
    {
      "input": [12],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "isPublic": true
    },
    {
      "input": [8],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7, 8],
      "isPublic": true
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 14
  },
  {
  "title": "Find Sum of First N Natural Numbers",
  "slug": "find-sum-of-first-n-natural-numbers",
  "problemStatement": "Given an integer n, calculate and return the sum of the first n natural numbers.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming"
  ],
  "pattern": [
    "MATHEMATICAL_FORMULA"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer n for each test case.",
  "outputFormat": "Return a 64-bit integer (long long in C++, long in Java, number in JavaScript, int in Python) representing the sum of first n natural numbers.",
  "constraints": [
    "1 <= n <= 10^9"
  ],
  "examples": [
    {
      "input": "n = 5",
      "output": "15"
    },
    {
      "input": "n = 10",
      "output": "55"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    long long sumOfFirstN(long long n) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public long sumOfFirstN(long n) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var sumOfFirstN = function(n) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def sumOfFirstN(self, n: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<long long> inputs = {\n        5,\n        1,\n        10,\n        100,\n        1000,\n        100000,\n        1000000000LL,\n        7,\n        12,\n        25\n    };\n\n    vector<long long> expected = {\n        15LL,\n        1LL,\n        55LL,\n        5050LL,\n        500500LL,\n        5000050000LL,\n        500000000500000000LL,\n        28LL,\n        78LL,\n        325LL\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        long long actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.sumOfFirstN(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        long[] inputs = {\n            5L,\n            1L,\n            10L,\n            100L,\n            1000L,\n            100000L,\n            1000000000L,\n            7L,\n            12L,\n            25L\n        };\n\n        long[] expected = {\n            15L,\n            1L,\n            55L,\n            5050L,\n            500500L,\n            5000050000L,\n            500000000500000000L,\n            28L,\n            78L,\n            325L\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            long actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.sumOfFirstN(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 5, expected: 15 },\n    { n: 1, expected: 1 },\n    { n: 10, expected: 55 },\n    { n: 100, expected: 5050 },\n    { n: 1000, expected: 500500 },\n    { n: 100000, expected: 5000050000 },\n    { n: 1000000000, expected: 500000000500000000 },\n    { n: 7, expected: 28 },\n    { n: 12, expected: 78 },\n    { n: 25, expected: 325 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = sumOfFirstN(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (BigInt(actual) === BigInt(expected));\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (5, 15),\n    (1, 1),\n    (10, 55),\n    (100, 5050),\n    (1000, 500500),\n    (100000, 5000050000),\n    (1000000000, 500000000500000000),\n    (7, 28),\n    (12, 78),\n    (25, 325)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.sumOfFirstN(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [5],
      "expectedOutput": 15,
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [10],
      "expectedOutput": 55,
      "isPublic": true
    },
    {
      "input": [100],
      "expectedOutput": 5050,
      "isPublic": true
    },
    {
      "input": [1000],
      "expectedOutput": 500500,
      "isPublic": true
    },
    {
      "input": [100000],
      "expectedOutput": 5000050000,
      "isPublic": true
    },
    {
      "input": [1000000000],
      "expectedOutput": 500000000500000000,
      "isPublic": true
    },
    {
      "input": [7],
      "expectedOutput": 28,
      "isPublic": true
    },
    {
      "input": [12],
      "expectedOutput": 78,
      "isPublic": true
    },
    {
      "input": [25],
      "expectedOutput": 325,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 15
  },
  {
  "title": "Find Factorial of a Number",
  "slug": "find-factorial-of-a-number",
  "problemStatement": "Given a non-negative integer n, calculate and return its factorial (n!). The factorial of a non-negative integer n is the product of all positive integers less than or equal to n, with 0! defined as 1.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming",
    "recursion"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a non-negative integer n for each test case.",
  "outputFormat": "Return a 64-bit integer representing the factorial of n.",
  "constraints": [
    "0 <= n <= 20"
  ],
  "examples": [
    {
      "input": "n = 5",
      "output": "120"
    },
    {
      "input": "n = 0",
      "output": "1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    long long factorial(int n) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public long factorial(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var factorial = function(n) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def factorial(self, n: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        5,\n        0,\n        1,\n        3,\n        7,\n        10,\n        12,\n        15,\n        18,\n        20\n    };\n\n    vector<long long> expected = {\n        120LL,\n        1LL,\n        1LL,\n        6LL,\n        5040LL,\n        3628800LL,\n        479001600LL,\n        1307674368000LL,\n        6402373705728000LL,\n        2432902008176640000LL\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        long long actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.factorial(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            5,\n            0,\n            1,\n            3,\n            7,\n            10,\n            12,\n            15,\n            18,\n            20\n        };\n\n        long[] expected = {\n            120L,\n            1L,\n            1L,\n            6L,\n            5040L,\n            3628800L,\n            479001600L,\n            1307674368000L,\n            6402373705728000L,\n            2432902008176640000L\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            long actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.factorial(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 5, expected: 120 },\n    { n: 0, expected: 1 },\n    { n: 1, expected: 1 },\n    { n: 3, expected: 6 },\n    { n: 7, expected: 5040 },\n    { n: 10, expected: 3628800 },\n    { n: 12, expected: 479001600 },\n    { n: 15, expected: 1307674368000 },\n    { n: 18, expected: 6402373705728000 },\n    { n: 20, expected: 2432902008176640000 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = factorial(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (BigInt(actual) === BigInt(expected));\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (5, 120),\n    (0, 1),\n    (1, 1),\n    (3, 6),\n    (7, 5040),\n    (10, 3628800),\n    (12, 479001600),\n    (15, 1307674368000),\n    (18, 6402373705728000),\n    (20, 2432902008176640000)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.factorial(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [5],
      "expectedOutput": 120,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [3],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [7],
      "expectedOutput": 5040,
      "isPublic": true
    },
    {
      "input": [10],
      "expectedOutput": 3628800,
      "isPublic": true
    },
    {
      "input": [12],
      "expectedOutput": 479001600,
      "isPublic": true
    },
    {
      "input": [15],
      "expectedOutput": 1307674368000,
      "isPublic": true
    },
    {
      "input": [18],
      "expectedOutput": 6402373705728000,
      "isPublic": true
    },
    {
      "input": [20],
      "expectedOutput": 2432902008176640000,
      "isPublic": true
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant"
  ],
  "order": 16
  },
  {
  "title": "Count Digits of a Number",
  "slug": "count-digits-of-a-number",
  "problemStatement": "Given an integer n, count and return the total number of digits present in n.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer n for each test case.",
  "outputFormat": "Return an integer representing the total number of digits in n.",
  "constraints": [
    "-10^9 <= n <= 10^9"
  ],
  "examples": [
    {
      "input": "n = 12345",
      "output": "5"
    },
    {
      "input": "n = 0",
      "output": "1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int countDigits(int n) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int countDigits(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var countDigits = function(n) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def countDigits(self, n: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        12345,\n        0,\n        7,\n        -9876,\n        100000,\n        999999999,\n        -5,\n        10101,\n        -1000,\n        1234567890\n    };\n\n    vector<int> expected = {\n        5,\n        1,\n        1,\n        4,\n        6,\n        9,\n        1,\n        5,\n        4,\n        10\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.countDigits(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            12345,\n            0,\n            7,\n            -9876,\n            100000,\n            999999999,\n            -5,\n            10101,\n            -1000,\n            1234567890\n        };\n\n        int[] expected = {\n            5,\n            1,\n            1,\n            4,\n            6,\n            9,\n            1,\n            5,\n            4,\n            10\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.countDigits(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 12345, expected: 5 },\n    { n: 0, expected: 1 },\n    { n: 7, expected: 1 },\n    { n: -9876, expected: 4 },\n    { n: 100000, expected: 6 },\n    { n: 999999999, expected: 9 },\n    { n: -5, expected: 1 },\n    { n: 10101, expected: 5 },\n    { n: -1000, expected: 4 },\n    { n: 1234567890, expected: 10 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = countDigits(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (12345, 5),\n    (0, 1),\n    (7, 1),\n    (-9876, 4),\n    (100000, 6),\n    (999999999, 9),\n    (-5, 1),\n    (10101, 5),\n    (-1000, 4),\n    (1234567890, 10)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.countDigits(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [12345],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [7],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [-9876],
      "expectedOutput": 4,
      "isPublic": true
    },
    {
      "input": [100000],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [999999999],
      "expectedOutput": 9,
      "isPublic": true
    },
    {
      "input": [-5],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [10101],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": [-1000],
      "expectedOutput": 4,
      "isPublic": true
    },
    {
      "input": [1234567890],
      "expectedOutput": 10,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log10(N))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 17
  },
  {
  "title": "Find Reverse of a Number",
  "slug": "find-reverse-of-a-number",
  "problemStatement": "Given a signed 32-bit integer n, return n with its digits reversed. If reversing n causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a signed 32-bit integer n for each test case.",
  "outputFormat": "Return a 32-bit signed integer representing the reversed digits of n, or 0 if an overflow occurs.",
  "constraints": [
    "-2^31 <= n <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "n = 123",
      "output": "321"
    },
    {
      "input": "n = -123",
      "output": "-321"
    },
    {
      "input": "n = 120",
      "output": "21"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int reverseNumber(int n) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int reverseNumber(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var reverseNumber = function(n) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def reverseNumber(self, n: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        123,\n        -123,\n        120,\n        0,\n        1534236469,\n        -2147483648,\n        900000,\n        7,\n        -54321,\n        1000000003\n    };\n\n    vector<int> expected = {\n        321,\n        -321,\n        21,\n        0,\n        0,\n        0,\n        9,\n        7,\n        -12345,\n        0\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.reverseNumber(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            123,\n            -123,\n            120,\n            0,\n            1534236469,\n            -2147483648,\n            900000,\n            7,\n            -54321,\n            1000000003\n        };\n\n        int[] expected = {\n            321,\n            -321,\n            21,\n            0,\n            0,\n            0,\n            9,\n            7,\n            -12345,\n            0\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.reverseNumber(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 123, expected: 321 },\n    { n: -123, expected: -321 },\n    { n: 120, expected: 21 },\n    { n: 0, expected: 0 },\n    { n: 1534236469, expected: 0 },\n    { n: -2147483648, expected: 0 },\n    { n: 900000, expected: 9 },\n    { n: 7, expected: 7 },\n    { n: -54321, expected: -12345 },\n    { n: 1000000003, expected: 0 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = reverseNumber(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (123, 321),\n    (-123, -321),\n    (120, 21),\n    (0, 0),\n    (1534236469, 0),\n    (-2147483648, 0),\n    (900000, 9),\n    (7, 7),\n    (-54321, -12345),\n    (1000000003, 0)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.reverseNumber(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [123],
      "expectedOutput": 321,
      "isPublic": true
    },
    {
      "input": [-123],
      "expectedOutput": -321,
      "isPublic": true
    },
    {
      "input": [120],
      "expectedOutput": 21,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [1534236469],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [-2147483648],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [900000],
      "expectedOutput": 9,
      "isPublic": true
    },
    {
      "input": [7],
      "expectedOutput": 7,
      "isPublic": true
    },
    {
      "input": [-54321],
      "expectedOutput": -12345,
      "isPublic": true
    },
    {
      "input": [1000000003],
      "expectedOutput": 0,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log10(N))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "Amazon",
    "Microsoft",
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 18
  },
  {
  "title": "Check Palindrome Number",
  "slug": "check-palindrome-number",
  "problemStatement": "Given an integer n, return true if n is a palindrome integer, otherwise return false. An integer is a palindrome when it reads the same backward as forward. Negative numbers are not palindromes due to the minus sign.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer n for each test case.",
  "outputFormat": "Return true if n is a palindrome, otherwise return false.",
  "constraints": [
    "-2^31 <= n <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "n = 121",
      "output": "true"
    },
    {
      "input": "n = -121",
      "output": "false"
    },
    {
      "input": "n = 10",
      "output": "false"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isPalindrome(int n) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isPalindrome(int n) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isPalindrome = function(n) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isPalindrome(self, n: int) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        121,\n        -121,\n        10,\n        0,\n        12321,\n        123456,\n        7,\n        -101,\n        1000021,\n        2147447412\n    };\n\n    vector<bool> expected = {\n        true,\n        false,\n        false,\n        true,\n        true,\n        false,\n        true,\n        false,\n        false,\n        true\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.isPalindrome(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n        string expectedStr = expected[i] ? \"true\" : \"false\";\n        string actualStr = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            121,\n            -121,\n            10,\n            0,\n            12321,\n            123456,\n            7,\n            -101,\n            1000021,\n            2147447412\n        };\n\n        boolean[] expected = {\n            true,\n            false,\n            false,\n            true,\n            true,\n            false,\n            true,\n            false,\n            false,\n            true\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isPalindrome(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 121, expected: true },\n    { n: -121, expected: false },\n    { n: 10, expected: false },\n    { n: 0, expected: true },\n    { n: 12321, expected: true },\n    { n: 123456, expected: false },\n    { n: 7, expected: true },\n    { n: -101, expected: false },\n    { n: 1000021, expected: false },\n    { n: 2147447412, expected: true }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = false;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = isPalindrome(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (121, True),\n    (-121, False),\n    (10, False),\n    (0, True),\n    (12321, True),\n    (123456, False),\n    (7, True),\n    (-101, False),\n    (1000021, False),\n    (2147447412, True)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = False\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.isPalindrome(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower(),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [121],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [-121],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [10],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [12321],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [123456],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [7],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [-101],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [1000021],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [2147447412],
      "expectedOutput": true,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log10(N))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "Amazon",
    "Microsoft",
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 19
  },
  {
  "title": "Find Largest Digit in a Number",
  "slug": "find-largest-digit-in-a-number",
  "problemStatement": "Given an integer n, find and return the largest digit present in n. If n is negative, consider only the absolute digits of the number.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer n for each test case.",
  "outputFormat": "Return an integer representing the maximum digit in n.",
  "constraints": [
    "-2^31 <= n <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "n = 2947",
      "output": "9"
    },
    {
      "input": "n = -582",
      "output": "8"
    },
    {
      "input": "n = 0",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int findLargestDigit(int n) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int findLargestDigit(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var findLargestDigit = function(n) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def findLargestDigit(self, n: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        2947,\n        -582,\n        0,\n        9,\n        11111,\n        7000,\n        -987654321,\n        2147483647,\n        -2147483648,\n        102938475\n    };\n\n    vector<int> expected = {\n        9,\n        8,\n        0,\n        9,\n        1,\n        7,\n        9,\n        8,\n        8,\n        9\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.findLargestDigit(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            2947,\n            -582,\n            0,\n            9,\n            11111,\n            7000,\n            -987654321,\n            2147483647,\n            -2147483648,\n            102938475\n        };\n\n        int[] expected = {\n            9,\n            8,\n            0,\n            9,\n            1,\n            7,\n            9,\n            8,\n            8,\n            9\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findLargestDigit(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 2947, expected: 9 },\n    { n: -582, expected: 8 },\n    { n: 0, expected: 0 },\n    { n: 9, expected: 9 },\n    { n: 11111, expected: 1 },\n    { n: 7000, expected: 7 },\n    { n: -987654321, expected: 9 },\n    { n: 2147483647, expected: 8 },\n    { n: -2147483648, expected: 8 },\n    { n: 102938475, expected: 9 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findLargestDigit(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (2947, 9),\n    (-582, 8),\n    (0, 0),\n    (9, 9),\n    (11111, 1),\n    (7000, 7),\n    (-987654321, 9),\n    (2147483647, 8),\n    (-2147483648, 8),\n    (102938475, 9)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findLargestDigit(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [2947],
      "expectedOutput": 9,
      "isPublic": true
    },
    {
      "input": [-582],
      "expectedOutput": 8,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [9],
      "expectedOutput": 9,
      "isPublic": true
    },
    {
      "input": [11111],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [7000],
      "expectedOutput": 7,
      "isPublic": true
    },
    {
      "input": [-987654321],
      "expectedOutput": 9,
      "isPublic": true
    },
    {
      "input": [2147483647],
      "expectedOutput": 8,
      "isPublic": true
    },
    {
      "input": [-2147483648],
      "expectedOutput": 8,
      "isPublic": true
    },
    {
      "input": [102938475],
      "expectedOutput": 9,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log10(N))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "Amazon",
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 20
  },
  {
  "title": "Check Whether a Number is Prime",
  "slug": "check-whether-a-number-is-prime",
  "problemStatement": "Given an integer n, return true if n is a prime number, otherwise return false. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an integer n for each test case.",
  "outputFormat": "Return true if n is a prime number, otherwise return false.",
  "constraints": [
    "-2^31 <= n <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "n = 5",
      "output": "true"
    },
    {
      "input": "n = 4",
      "output": "false"
    },
    {
      "input": "n = 1",
      "output": "false"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isPrime(int n) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isPrime(int n) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isPrime = function(n) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isPrime(self, n: int) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        5,\n        4,\n        1,\n        0,\n        -7,\n        2,\n        29,\n        100,\n        997,\n        2147483647\n    };\n\n    vector<bool> expected = {\n        true,\n        false,\n        false,\n        false,\n        false,\n        true,\n        true,\n        false,\n        true,\n        true\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.isPrime(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n        string expectedStr = expected[i] ? \"true\" : \"false\";\n        string actualStr = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            5,\n            4,\n            1,\n            0,\n            -7,\n            2,\n            29,\n            100,\n            997,\n            2147483647\n        };\n\n        boolean[] expected = {\n            true,\n            false,\n            false,\n            false,\n            false,\n            true,\n            true,\n            false,\n            true,\n            true\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isPrime(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 5, expected: true },\n    { n: 4, expected: false },\n    { n: 1, expected: false },\n    { n: 0, expected: false },\n    { n: -7, expected: false },\n    { n: 2, expected: true },\n    { n: 29, expected: true },\n    { n: 100, expected: false },\n    { n: 997, expected: true },\n    { n: 2147483647, expected: true }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = false;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = isPrime(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (5, True),\n    (4, False),\n    (1, False),\n    (0, False),\n    (-7, False),\n    (2, True),\n    (29, True),\n    (100, False),\n    (997, True),\n    (2147483647, True)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = False\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.isPrime(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower(),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [5],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [4],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [0],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [-7],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [2],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [29],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [100],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [997],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [2147483647],
      "expectedOutput": true,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(sqrt(N))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 21
  },
  {
  "title": "Count Factors of a Number",
  "slug": "count-factors-of-a-number",
  "problemStatement": "Given a positive integer n, return the total count of its positive factors (divisors). A factor is an integer that divides n completely without leaving a remainder.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming"
  ],
  "pattern": [
    "BASIC_LOOPING"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a positive integer n for each test case.",
  "outputFormat": "Return an integer representing the total count of positive factors of n.",
  "constraints": [
    "1 <= n <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "n = 12",
      "output": "6"
    },
    {
      "input": "n = 5",
      "output": "2"
    },
    {
      "input": "n = 1",
      "output": "1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int countFactors(int n) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int countFactors(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var countFactors = function(n) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def countFactors(self, n: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        12,\n        5,\n        1,\n        16,\n        36,\n        100,\n        997,\n        1000000000,\n        2147483647,\n        2147395600\n    };\n\n    vector<int> expected = {\n        6,\n        2,\n        1,\n        5,\n        9,\n        9,\n        2,\n        100,\n        2,\n        135\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.countFactors(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            12,\n            5,\n            1,\n            16,\n            36,\n            100,\n            997,\n            1000000000,\n            2147483647,\n            2147395600\n        };\n\n        int[] expected = {\n            6,\n            2,\n            1,\n            5,\n            9,\n            9,\n            2,\n            100,\n            2,\n            135\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.countFactors(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 12, expected: 6 },\n    { n: 5, expected: 2 },\n    { n: 1, expected: 1 },\n    { n: 16, expected: 5 },\n    { n: 36, expected: 9 },\n    { n: 100, expected: 9 },\n    { n: 997, expected: 2 },\n    { n: 1000000000, expected: 100 },\n    { n: 2147483647, expected: 2 },\n    { n: 2147395600, expected: 135 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = countFactors(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (12, 6),\n    (5, 2),\n    (1, 1),\n    (16, 5),\n    (36, 9),\n    (100, 9),\n    (997, 2),\n    (1000000000, 100),\n    (2147483647, 2),\n    (2147395600, 135)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.countFactors(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [12],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [5],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [1],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [16],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": [36],
      "expectedOutput": 9,
      "isPublic": false
    },
    {
      "input": [100],
      "expectedOutput": 9,
      "isPublic": false
    },
    {
      "input": [997],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [1000000000],
      "expectedOutput": 100,
      "isPublic": false
    },
    {
      "input": [2147483647],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [2147395600],
      "expectedOutput": 135,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(sqrt(N))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "wipro",
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 22
},
{
  "title": "Find GCD of Two Numbers",
  "slug": "find-gcd-of-two-numbers",
  "problemStatement": "Given two positive integers a and b, return their Greatest Common Divisor (GCD), also known as the Highest Common Factor (HCF). The GCD of two integers is the largest positive integer that divides both numbers without leaving a remainder.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming",
    "euclidean-algorithm"
  ],
  "pattern": [
    "EUCLIDEAN_ALGORITHM"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two positive integers a and b for each test case.",
  "outputFormat": "Return an integer representing the GCD of a and b.",
  "constraints": [
    "1 <= a, b <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "a = 12, b = 18",
      "output": "6"
    },
    {
      "input": "a = 7, b = 13",
      "output": "1"
    },
    {
      "input": "a = 48, b = 18",
      "output": "6"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int findGCD(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int findGCD(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var findGCD = function(a, b) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def findGCD(self, a: int, b: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<pair<int, int>> inputs = {\n        {12, 18},\n        {7, 13},\n        {48, 18},\n        {100, 100},\n        {1, 1},\n        {1000000007, 1000000007},\n        {81, 153},\n        {2147483647, 100000},\n        {36, 60},\n        {98, 56}\n    };\n\n    vector<int> expected = {\n        6,\n        1,\n        6,\n        100,\n        1,\n        1000000007,\n        9,\n        1,\n        12,\n        14\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.findGCD(inputs[i].first, inputs[i].second);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"a = \" + to_string(inputs[i].first) + \", b = \" + to_string(inputs[i].second);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputs = {\n            {12, 18},\n            {7, 13},\n            {48, 18},\n            {100, 100},\n            {1, 1},\n            {1000000007, 1000000007},\n            {81, 153},\n            {2147483647, 100000},\n            {36, 60},\n            {98, 56}\n        };\n\n        int[] expected = {\n            6,\n            1,\n            6,\n            100,\n            1,\n            1000000007,\n            9,\n            1,\n            12,\n            14\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findGCD(inputs[i][0], inputs[i][1]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"a = \" + inputs[i][0] + \", b = \" + inputs[i][1];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { a: 12, b: 18, expected: 6 },\n    { a: 7, b: 13, expected: 1 },\n    { a: 48, b: 18, expected: 6 },\n    { a: 100, b: 100, expected: 100 },\n    { a: 1, b: 1, expected: 1 },\n    { a: 1000000007, b: 1000000007, expected: 1000000007 },\n    { a: 81, b: 153, expected: 9 },\n    { a: 2147483647, b: 100000, expected: 1 },\n    { a: 36, b: 60, expected: 12 },\n    { a: 98, b: 56, expected: 14 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { a, b, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findGCD(a, b);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `a = ${a}, b = ${b}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (12, 18, 6),\n    (7, 13, 1),\n    (48, 18, 6),\n    (100, 100, 100),\n    (1, 1, 1),\n    (1000000007, 1000000007, 1000000007),\n    (81, 153, 9),\n    (2147483647, 100000, 1),\n    (36, 60, 12),\n    (98, 56, 14)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    a, b, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findGCD(a, b)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"a = {a}, b = {b}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [12, 18],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [7, 13],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": [48, 18],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [100, 100],
      "expectedOutput": 100,
      "isPublic": false
    },
    {
      "input": [1, 1],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [1000000007, 1000000007],
      "expectedOutput": 1000000007,
      "isPublic": false
    },
    {
      "input": [81, 153],
      "expectedOutput": 9,
      "isPublic": false
    },
    {
      "input": [2147483647, 100000],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [36, 60],
      "expectedOutput": 12,
      "isPublic": false
    },
    {
      "input": [98, 56],
      "expectedOutput": 14,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log(min(a, b)))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
   
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 23
},
{
  "title": "Find LCM of Two Numbers",
  "slug": "find-lcm-of-two-numbers",
  "problemStatement": "Given two positive integers a and b, return their Least Common Multiple (LCM). The LCM of two integers is the smallest positive integer that is perfectly divisible by both numbers without leaving a remainder.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming",
    "euclidean-algorithm"
  ],
  "pattern": [
    "EUCLIDEAN_ALGORITHM"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two positive integers a and b for each test case.",
  "outputFormat": "Return a 64-bit integer (long long in C++, long in Java, number/BigInt in JS, int in Python) representing the LCM of a and b.",
  "constraints": [
    "1 <= a, b <= 10^9"
  ],
  "examples": [
    {
      "input": "a = 4, b = 6",
      "output": "12"
    },
    {
      "input": "a = 5, b = 7",
      "output": "35"
    },
    {
      "input": "a = 15, b = 20",
      "output": "60"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    long long findLCM(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public long findLCM(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var findLCM = function(a, b) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def findLCM(self, a: int, b: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<pair<int, int>> inputs = {\n        {4, 6},\n        {5, 7},\n        {15, 20},\n        {100, 100},\n        {1, 1},\n        {100000, 200000},\n        {12, 18},\n        {999999999, 1000000000},\n        {21, 14},\n        {35, 45}\n    };\n\n    vector<long long> expected = {\n        12LL,\n        35LL,\n        60LL,\n        100LL,\n        1LL,\n        200000LL,\n        36LL,\n        999999999000000000LL,\n        42LL,\n        315LL\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        long long actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.findLCM(inputs[i].first, inputs[i].second);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"a = \" + to_string(inputs[i].first) + \", b = \" + to_string(inputs[i].second);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + to_string(expected[i]) + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + to_string(actual) + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputs = {\n            {4, 6},\n            {5, 7},\n            {15, 20},\n            {100, 100},\n            {1, 1},\n            {100000, 200000},\n            {12, 18},\n            {999999999, 1000000000},\n            {21, 14},\n            {35, 45}\n        };\n\n        long[] expected = {\n            12L,\n            35L,\n            60L,\n            100L,\n            1L,\n            200000L,\n            36L,\n            999999999000000000L,\n            42L,\n            315L\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            long actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findLCM(inputs[i][0], inputs[i][1]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"a = \" + inputs[i][0] + \", b = \" + inputs[i][1];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { a: 4, b: 6, expected: 12 },\n    { a: 5, b: 7, expected: 35 },\n    { a: 15, b: 20, expected: 60 },\n    { a: 100, b: 100, expected: 100 },\n    { a: 1, b: 1, expected: 1 },\n    { a: 100000, b: 200000, expected: 200000 },\n    { a: 12, b: 18, expected: 36 },\n    { a: 999999999, b: 1000000000, expected: 999999999000000000 },\n    { a: 21, b: 14, expected: 42 },\n    { a: 35, b: 45, expected: 315 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { a, b, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findLCM(a, b);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (BigInt(actual) === BigInt(expected));\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `a = ${a}, b = ${b}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (4, 6, 12),\n    (5, 7, 35),\n    (15, 20, 60),\n    (100, 100, 100),\n    (1, 1, 1),\n    (100000, 200000, 200000),\n    (12, 18, 36),\n    (999999999, 1000000000, 999999999000000000),\n    (21, 14, 42),\n    (35, 45, 315)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    a, b, expected = test_cases[i]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findLCM(a, b)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"a = {a}, b = {b}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [4, 6],
      "expectedOutput": 12,
      "isPublic": true
    },
    {
      "input": [5, 7],
      "expectedOutput": 35,
      "isPublic": true
    },
    {
      "input": [15, 20],
      "expectedOutput": 60,
      "isPublic": true
    },
    {
      "input": [100, 100],
      "expectedOutput": 100,
      "isPublic": false
    },
    {
      "input": [1, 1],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [100000, 200000],
      "expectedOutput": 200000,
      "isPublic": false
    },
    {
      "input": [12, 18],
      "expectedOutput": 36,
      "isPublic": false
    },
    {
      "input": [999999999, 1000000000],
      "expectedOutput": 999999999000000000,
      "isPublic": false
    },
    {
      "input": [21, 14],
      "expectedOutput": 42,
      "isPublic": false
    },
    {
      "input": [35, 45],
      "expectedOutput": 315,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log(min(a, b)))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 24
  },
  {
  "title": "Check Whether a Number is an Armstrong Number",
  "slug": "check-whether-a-number-is-an-armstrong-number",
  "problemStatement": "Given an integer n, return true if it is an Armstrong number (also known as a Narcissistic number), otherwise return false. An n-digit number is an Armstrong number if the sum of its own digits each raised to the power of the number of digits is equal to the number itself.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming",
    "digits"
  ],
  "pattern": [
    "DIGIT_MANIPULATION"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a single integer n for each test case.",
  "outputFormat": "Return a boolean value (true/false) indicating whether the number is an Armstrong number.",
  "constraints": [
    "1 <= n <= 2^31 - 1"
  ],
  "examples": [
    {
      "input": "n = 153",
      "output": "true"
    },
    {
      "input": "n = 123",
      "output": "false"
    },
    {
      "input": "n = 371",
      "output": "true"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isArmstrong(int n) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isArmstrong(int n) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isArmstrong = function(n) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isArmstrong(self, n: int) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<int> inputs = {\n        153,\n        123,\n        371,\n        9474,\n        9475,\n        1,\n        9,\n        10,\n        54748,\n        100\n    };\n\n    vector<bool> expected = {\n        true,\n        false,\n        true,\n        true,\n        false,\n        true,\n        true,\n        false,\n        true,\n        false\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.isArmstrong(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"n = \" + to_string(inputs[i]);\n        string expectedStr = expected[i] ? \"true\" : \"false\";\n        string actualStr = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[] inputs = {\n            153,\n            123,\n            371,\n            9474,\n            9475,\n            1,\n            9,\n            10,\n            54748,\n            100\n        };\n\n        boolean[] expected = {\n            true,\n            false,\n            true,\n            true,\n            false,\n            true,\n            true,\n            false,\n            true,\n            false\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isArmstrong(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"n = \" + inputs[i];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { n: 153, expected: true },\n    { n: 123, expected: false },\n    { n: 371, expected: true },\n    { n: 9474, expected: true },\n    { n: 9475, expected: false },\n    { n: 1, expected: true },\n    { n: 9, expected: true },\n    { n: 10, expected: false },\n    { n: 54748, expected: true },\n    { n: 100, expected: false }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { n, expected } = testCases[i];\n\n    let actual = false;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = isArmstrong(n);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (actual === expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `n = ${n}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (153, True),\n    (123, False),\n    (371, True),\n    (9474, True),\n    (9475, False),\n    (1, True),\n    (9, True),\n    (10, False),\n    (54748, True),\n    (100, False)\n]\n\nsolution = Solution()\n\ntotalTestCases = 10\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    n, expected = test_cases[i]\n\n    actual = False\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.isArmstrong(n)\n\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"n = {n}\",\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower(),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [153],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [123],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [371],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [9474],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [9475],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [1],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [9],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [10],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [54748],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [100],
      "expectedOutput": false,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(log10(n))",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 25
  },
  {
  "title": "Function to Calculate Area of a Triangle",
  "slug": "function-to-calculate-area-of-a-triangle",
  "problemStatement": "Given two numbers representing the base and height of a triangle, write a function to calculate and return the area of the triangle. The formula to calculate the area of a triangle is 0.5 * base * height.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming",
    "geometry"
  ],
  "pattern": [
    "FORMULA_BASED"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two double/floating-point values: base and height.",
  "outputFormat": "Return a floating-point number representing the area of the triangle.",
  "constraints": [
    "0.0 <= base <= 10^4",
    "0.0 <= height <= 10^4"
  ],
  "examples": [
    {
      "input": "base = 5.0, height = 10.0",
      "output": "25.0"
    },
    {
      "input": "base = 3.0, height = 4.0",
      "output": "6.0"
    },
    {
      "input": "base = 0.0, height = 8.0",
      "output": "0.0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    double calculateArea(double base, double height) {\n        // Write your code here\n        return 0.0;\n    }\n};",
    "java": "class Solution {\n    public double calculateArea(double base, double height) {\n        // Write your code here\n        return 0.0;\n    }\n}",
    "javascript": "var calculateArea = function(base, height) {\n    // Write your code here\n    return 0.0;\n};",
    "python": "class Solution:\n    def calculateArea(self, base: float, height: float) -> float:\n        # Write your code here\n        return 0.0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<pair<double, double>> inputs = {\n        {5.0, 10.0},\n        {3.0, 4.0},\n        {0.0, 8.0},\n        {7.5, 2.0},\n        {12.0, 15.0},\n        {1.0, 1.0},\n        {100.0, 50.0},\n        {2.5, 4.5},\n        {10.0, 0.0},\n        {9.2, 3.4}\n    };\n\n    vector<double> expected = {\n        25.0,\n        6.0,\n        0.0,\n        7.5,\n        90.0,\n        0.5,\n        2500.0,\n        5.625,\n        0.0,\n        15.64\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        double actual = 0.0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.calculateArea(inputs[i].first, inputs[i].second);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (abs(actual - expected[i]) < 1e-5);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"base = \" + to_string(inputs[i].first) + \", height = \" + to_string(inputs[i].second);\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        double[][] inputs = {\n            {5.0, 10.0},\n            {3.0, 4.0},\n            {0.0, 8.0},\n            {7.5, 2.0},\n            {12.0, 15.0},\n            {1.0, 1.0},\n            {100.0, 50.0},\n            {2.5, 4.5},\n            {10.0, 0.0},\n            {9.2, 3.4}\n        };\n\n        double[] expected = {\n            25.0,\n            6.0,\n            0.0,\n            7.5,\n            90.0,\n            0.5,\n            2500.0,\n            5.625,\n            0.0,\n            15.64\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            double actual = 0.0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.calculateArea(inputs[i][0], inputs[i][1]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (Math.abs(actual - expected[i]) < 1e-5);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"base = \" + inputs[i][0] + \", height = \" + inputs[i][1];\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expected[i] + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actual + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { base: 5.0, height: 10.0, expected: 25.0 },\n    { base: 3.0, height: 4.0, expected: 6.0 },\n    { base: 0.0, height: 8.0, expected: 0.0 },\n    { base: 7.5, height: 2.0, expected: 7.5 },\n    { base: 12.0, height: 15.0, expected: 90.0 },\n    { base: 1.0, height: 1.0, expected: 0.5 },\n    { base: 100.0, height: 50.0, expected: 2500.0 },\n    { base: 2.5, height: 4.5, expected: 5.625 },\n    { base: 10.0, height: 0.0, expected: 0.0 },\n    { base: 9.2, height: 3.4, expected: 15.64 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { base, height, expected } = testCases[i];\n\n    let actual = 0.0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = calculateArea(base, height);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && (Math.abs(actual - expected) < 1e-5);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `base = ${base}, height = ${height}`,\n        expectedOutput: String(expected),\n        actualOutput: String(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (5.0, 10.0, 25.0),\n    (3.0, 4.0, 6.0),\n    (0.0, 8.0, 0.0),\n    (7.5, 2.0, 7.5),\n    (12.0, 15.0, 90.0),\n    (1.0, 1.0, 0.5),\n    (100.0, 50.0, 2500.0),\n    (2.5, 4.5, 5.625),\n    (10.0, 0.0, 0.0),\n    (9.2, 3.4, 15.64)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    base, height, expected = test_cases[i]\n\n    actual = 0.0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.calculateArea(base, height)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and abs(actual - expected) < 1e-5\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"base = {base}, height = {height}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [5.0, 10.0],
      "expectedOutput": 25.0,
      "isPublic": true
    },
    {
      "input": [3.0, 4.0],
      "expectedOutput": 6.0,
      "isPublic": true
    },
    {
      "input": [0.0, 8.0],
      "expectedOutput": 0.0,
      "isPublic": true
    },
    {
      "input": [7.5, 2.0],
      "expectedOutput": 7.5,
      "isPublic": false
    },
    {
      "input": [12.0, 15.0],
      "expectedOutput": 90.0,
      "isPublic": false
    },
    {
      "input": [1.0, 1.0],
      "expectedOutput": 0.5,
      "isPublic": false
    },
    {
      "input": [100.0, 50.0],
      "expectedOutput": 2500.0,
      "isPublic": false
    },
    {
      "input": [2.5, 4.5],
      "expectedOutput": 5.625,
      "isPublic": false
    },
    {
      "input": [10.0, 0.0],
      "expectedOutput": 0.0,
      "isPublic": false
    },
    {
      "input": [9.2, 3.4],
      "expectedOutput": 15.64,
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture"
  ],
  "order": 26
  },
  {
  "title": "Function to Convert Kilometers into Meters and Centimeters",
  "slug": "function-to-convert-kilometers-into-meters-and-centimeters",
  "problemStatement": "Given a distance in kilometers as a double, write a function to convert it into meters and centimeters. Return the result as an array or object containing two values: the distance in meters and the distance in centimeters.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "math",
    "basic-programming",
    "unit-conversion"
  ],
  "pattern": [
    "FORMULA_BASED"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a single non-negative double value representing kilometers.",
  "outputFormat": "Return an array or list of two double values: [meters, centimeters].",
  "constraints": [
    "0.0 <= km <= 10^4"
  ],
  "examples": [
    {
      "input": "km = 1.0",
      "output": "[1000.0, 100000.0]"
    },
    {
      "input": "km = 2.5",
      "output": "[2500.0, 250000.0]"
    },
    {
      "input": "km = 0.0",
      "output": "[0.0, 0.0]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<double> convertKm(double km) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public double[] convertKm(double km) {\n        // Write your code here\n        return new double[]{0.0, 0.0};\n    }\n}",
    "javascript": "var convertKm = function(km) {\n    // Write your code here\n    return [0.0, 0.0];\n};",
    "python": "class Solution:\n    def convertKm(self, km: float) -> list[float]:\n        # Write your code here\n        return [0.0, 0.0]"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<double> inputs = {\n        1.0,\n        2.5,\n        0.0,\n        0.001,\n        10.0,\n        0.75,\n        100.0,\n        5.25,\n        0.05,\n        12.34\n    };\n\n    vector<vector<double>> expected = {\n        {1000.0, 100000.0},\n        {2500.0, 250000.0},\n        {0.0, 0.0},\n        {1.0, 100.0},\n        {10000.0, 1000000.0},\n        {750.0, 75000.0},\n        {100000.0, 10000000.0},\n        {5250.0, 525000.0},\n        {50.0, 5000.0},\n        {12340.0, 1234000.0}\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<double> actual;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.convertKm(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual.size() == 2 &&\n                      (abs(actual[0] - expected[i][0]) < 1e-5) &&\n                      (abs(actual[1] - expected[i][1]) < 1e-5);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"km = \" + to_string(inputs[i]);\n        string expectedStr = \"[\" + to_string(expected[i][0]) + \", \" + to_string(expected[i][1]) + \"]\";\n        string actualStr = actual.size() == 2 ? \"[\" + to_string(actual[0]) + \", \" + to_string(actual[1]) + \"]\" : \"[]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        double[] inputs = {\n            1.0,\n            2.5,\n            0.0,\n            0.001,\n            10.0,\n            0.75,\n            100.0,\n            5.25,\n            0.05,\n            12.34\n        };\n\n        double[][] expected = {\n            {1000.0, 100000.0},\n            {2500.0, 250000.0},\n            {0.0, 0.0},\n            {1.0, 100.0},\n            {10000.0, 1000000.0},\n            {750.0, 75000.0},\n            {100000.0, 10000000.0},\n            {5250.0, 525000.0},\n            {50.0, 5000.0},\n            {12340.0, 1234000.0}\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            double[] actual = null;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.convertKm(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual != null && actual.length == 2 &&\n                          (Math.abs(actual[0] - expected[i][0]) < 1e-5) &&\n                          (Math.abs(actual[1] - expected[i][1]) < 1e-5);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"km = \" + inputs[i];\n            String expectedStr = \"[\" + expected[i][0] + \", \" + expected[i][1] + \"]\";\n            String actualStr = actual != null && actual.length == 2 ? \"[\" + actual[0] + \", \" + actual[1] + \"]\" : \"null\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { km: 1.0, expected: [1000.0, 100000.0] },\n    { km: 2.5, expected: [2500.0, 250000.0] },\n    { km: 0.0, expected: [0.0, 0.0] },\n    { km: 0.001, expected: [1.0, 100.0] },\n    { km: 10.0, expected: [10000.0, 1000000.0] },\n    { km: 0.75, expected: [750.0, 75000.0] },\n    { km: 100.0, expected: [100000.0, 10000000.0] },\n    { km: 5.25, expected: [5250.0, 525000.0] },\n    { km: 0.05, expected: [50.0, 5000.0] },\n    { km: 12.34, expected: [12340.0, 1234000.0] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { km, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = convertKm(km);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && Array.isArray(actual) && actual.length === 2 &&\n                   (Math.abs(actual[0] - expected[0]) < 1e-5) &&\n                   (Math.abs(actual[1] - expected[1]) < 1e-5);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `km = ${km}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (1.0, [1000.0, 100000.0]),\n    (2.5, [2500.0, 250000.0]),\n    (0.0, [0.0, 0.0]),\n    (0.001, [1.0, 100.0]),\n    (10.0, [10000.0, 1000000.0]),\n    (0.75, [750.0, 75000.0]),\n    (100.0, [100000.0, 10000000.0]),\n    (5.25, [5250.0, 525000.0]),\n    (0.05, [50.0, 5000.0]),\n    (12.34, [12340.0, 1234000.0])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    km, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.convertKm(km)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and isinstance(actual, list) and len(actual) == 2 and \\\n             abs(actual[0] - expected[0]) < 1e-5 and abs(actual[1] - expected[1]) < 1e-5\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"km = {km}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [1.0],
      "expectedOutput": [1000.0, 100000.0],
      "isPublic": true
    },
    {
      "input": [2.5],
      "expectedOutput": [2500.0, 250000.0],
      "isPublic": true
    },
    {
      "input": [0.0],
      "expectedOutput": [0.0, 0.0],
      "isPublic": true
    },
    {
      "input": [0.001],
      "expectedOutput": [1.0, 100.0],
      "isPublic": false
    },
    {
      "input": [10.0],
      "expectedOutput": [10000.0, 1000000.0],
      "isPublic": false
    },
    {
      "input": [0.75],
      "expectedOutput": [750.0, 75000.0],
      "isPublic": false
    },
    {
      "input": [100.0],
      "expectedOutput": [100000.0, 10000000.0],
      "isPublic": false
    },
    {
      "input": [5.25],
      "expectedOutput": [5250.0, 525000.0],
      "isPublic": false
    },
    {
      "input": [0.05],
      "expectedOutput": [50.0, 5000.0],
      "isPublic": false
    },
    {
      "input": [12.34],
      "expectedOutput": [12340.0, 1234000.0],
      "isPublic": false
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(1)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture"
  ],
  "order": 27
},
{
  "title": "Find Sum of Array Elements",
  "slug": "find-sum-of-array-elements",
  "problemStatement": "Given an array of integers, write a function that calculates and returns the sum of all elements in the array.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "arrays",
    "basic-programming"
  ],
  "pattern": [
    "ARRAY_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an array of integers `arr`.",
  "outputFormat": "Return an integer representing the sum of all elements in the array.",
  "constraints": [
    "0 <= arr.length <= 10^4",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "examples": [
    {
      "input": "arr = [1, 2, 3, 4, 5]",
      "output": "15"
    },
    {
      "input": "arr = [10, -20, 30]",
      "output": "20"
    },
    {
      "input": "arr = []",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    long long sumOfArray(vector<int>& arr) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public long sumOfArray(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var sumOfArray = function(arr) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def sumOfArray(self, arr: list[int]) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<vector<int>> inputs = {\n        {1, 2, 3, 4, 5},\n        {10, -20, 30},\n        {},\n        {0},\n        {-1, -2, -3, -4},\n        {100, 200, 300, 400},\n        {7, 14, 21, 28, 35, 42},\n        {999999},\n        {5, 4, 3, 2, 1, 0},\n        {12, 34, 56, 78, 90}\n    };\n\n    vector<long long> expected = {\n        15, 20, 0, 0, -10, 1000, 147, 999999, 15, 270\n    };\n\n    vector<string> testCasesResult;\n\n    auto arrayToString = [](const vector<int>& v) {\n        string s = \"[\";\n        for(size_t i = 0; i < v.size(); i++) {\n            s += to_string(v[i]);\n            if(i + 1 < v.size()) s += \", \";\n        }\n        s += \"]\";\n        return s;\n    };\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        long long actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.sumOfArray(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"arr = \" + arrayToString(inputs[i]);\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    private static String arrayToString(int[] arr) {\n        if (arr == null) return \"null\";\n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < arr.length; i++) {\n            sb.append(arr[i]);\n            if (i + 1 < arr.length) sb.append(\", \");\n        }\n        sb.append(\"]\");\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputs = {\n            {1, 2, 3, 4, 5},\n            {10, -20, 30},\n            {},\n            {0},\n            {-1, -2, -3, -4},\n            {100, 200, 300, 400},\n            {7, 14, 21, 28, 35, 42},\n            {999999},\n            {5, 4, 3, 2, 1, 0},\n            {12, 34, 56, 78, 90}\n        };\n\n        long[] expected = {\n            15, 20, 0, 0, -10, 1000, 147, 999999, 15, 270\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            long actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.sumOfArray(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"arr = \" + arrayToString(inputs[i]);\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { arr: [1, 2, 3, 4, 5], expected: 15 },\n    { arr: [10, -20, 30], expected: 20 },\n    { arr: [], expected: 0 },\n    { arr: [0], expected: 0 },\n    { arr: [-1, -2, -3, -4], expected: -10 },\n    { arr: [100, 200, 300, 400], expected: 1000 },\n    { arr: [7, 14, 21, 28, 35, 42], expected: 147 },\n    { arr: [999999], expected: 999999 },\n    { arr: [5, 4, 3, 2, 1, 0], expected: 15 },\n    { arr: [12, 34, 56, 78, 90], expected: 270 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { arr, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = sumOfArray(arr);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `arr = ${JSON.stringify(arr)}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 2, 3, 4, 5], 15),\n    ([10, -20, 30], 20),\n    ([], 0),\n    ([0], 0),\n    ([-1, -2, -3, -4], -10),\n    ([100, 200, 300, 400], 1000),\n    ([7, 14, 21, 28, 35, 42], 147),\n    ([999999], 999999),\n    ([5, 4, 3, 2, 1, 0], 15),\n    ([12, 34, 56, 78, 90], 270)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    arr, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.sumOfArray(arr)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"arr = {arr}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        [1, 2, 3, 4, 5]
      ],
      "expectedOutput": 15,
      "isPublic": true
    },
    {
      "input": [
        [10, -20, 30]
      ],
      "expectedOutput": 20,
      "isPublic": true
    },
    {
      "input": [
        []
      ],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [
        [0]
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        [-1, -2, -3, -4]
      ],
      "expectedOutput": -10,
      "isPublic": false
    },
    {
      "input": [
        [100, 200, 300, 400]
      ],
      "expectedOutput": 1000,
      "isPublic": false
    },
    {
      "input": [
        [7, 14, 21, 28, 35, 42]
      ],
      "expectedOutput": 147,
      "isPublic": false
    },
    {
      "input": [
        [999999]
      ],
      "expectedOutput": 999999,
      "isPublic": false
    },
    {
      "input": [
        [5, 4, 3, 2, 1, 0]
      ],
      "expectedOutput": 15,
      "isPublic": false
    },
    {
      "input": [
        [12, 34, 56, 78, 90]
      ],
      "expectedOutput": 270,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture"
  ],
  "order": 28
  },
  {
  "title": "Search for an Element in an Array",
  "slug": "search-for-an-element-in-an-array",
  "problemStatement": "Given an array of integers `arr` and a target integer `x`, write a function to search for `x` in `arr`. Return the 0-based index of `x` if it is present in the array; otherwise, return `-1`.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "arrays",
    "searching",
    "basic-programming"
  ],
  "pattern": [
    "ARRAY_TRAVERSAL",
    "LINEAR_SEARCH"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an array of integers `arr` and a target integer `x`.",
  "outputFormat": "Return an integer representing the 0-based index of `x` if found, or `-1` if not found.",
  "constraints": [
    "0 <= arr.length <= 10^4",
    "-10^9 <= arr[i], x <= 10^9"
  ],
  "examples": [
    {
      "input": "arr = [1, 2, 3, 4, 5], x = 3",
      "output": "2"
    },
    {
      "input": "arr = [10, -20, 30], x = 50",
      "output": "-1"
    },
    {
      "input": "arr = [], x = 5",
      "output": "-1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int searchElement(vector<int>& arr, int x) {\n        // Write your code here\n        return -1;\n    }\n};",
    "java": "class Solution {\n    public int searchElement(int[] arr, int x) {\n        // Write your code here\n        return -1;\n    }\n}",
    "javascript": "var searchElement = function(arr, x) {\n    // Write your code here\n    return -1;\n};",
    "python": "class Solution:\n    def searchElement(self, arr: list[int], x: int) -> int:\n        # Write your code here\n        return -1"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<pair<vector<int>, int>> inputs = {\n        {{1, 2, 3, 4, 5}, 3},\n        {{10, -20, 30}, 50},\n        {{}, 5},\n        {{0, 0, 0}, 0},\n        {{-1, -2, -3, -4}, -3},\n        {{100, 200, 300, 400}, 100},\n        {{7, 14, 21, 28, 35, 42}, 42},\n        {{999999}, 1},\n        {{5, 4, 3, 2, 1, 0}, 0},\n        {{12, 34, 56, 78, 90}, 56}\n    };\n\n    vector<int> expected = {\n        2, -1, -1, 0, 2, 0, 5, -1, 5, 2\n    };\n\n    vector<string> testCasesResult;\n\n    auto arrayToString = [](const vector<int>& v) {\n        string s = \"[\";\n        for(size_t i = 0; i < v.size(); i++) {\n            s += to_string(v[i]);\n            if(i + 1 < v.size()) s += \", \";\n        }\n        s += \"]\";\n        return s;\n    };\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = -1;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.searchElement(inputs[i].first, inputs[i].second);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"arr = \" + arrayToString(inputs[i].first) + \", x = \" + to_string(inputs[i].second);\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    private static String arrayToString(int[] arr) {\n        if (arr == null) return \"null\";\n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < arr.length; i++) {\n            sb.append(arr[i]);\n            if (i + 1 < arr.length) sb.append(\", \");\n        }\n        sb.append(\"]\");\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputsArr = {\n            {1, 2, 3, 4, 5},\n            {10, -20, 30},\n            {},\n            {0, 0, 0},\n            {-1, -2, -3, -4},\n            {100, 200, 300, 400},\n            {7, 14, 21, 28, 35, 42},\n            {999999},\n            {5, 4, 3, 2, 1, 0},\n            {12, 34, 56, 78, 90}\n        };\n\n        int[] inputsX = {\n            3, 50, 5, 0, -3, 100, 42, 1, 0, 56\n        };\n\n        int[] expected = {\n            2, -1, -1, 0, 2, 0, 5, -1, 5, 2\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = -1;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.searchElement(inputsArr[i], inputsX[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"arr = \" + arrayToString(inputsArr[i]) + \", x = \" + inputsX[i];\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { arr: [1, 2, 3, 4, 5], x: 3, expected: 2 },\n    { arr: [10, -20, 30], x: 50, expected: -1 },\n    { arr: [], x: 5, expected: -1 },\n    { arr: [0, 0, 0], x: 0, expected: 0 },\n    { arr: [-1, -2, -3, -4], x: -3, expected: 2 },\n    { arr: [100, 200, 300, 400], x: 100, expected: 0 },\n    { arr: [7, 14, 21, 28, 35, 42], x: 42, expected: 5 },\n    { arr: [999999], x: 1, expected: -1 },\n    { arr: [5, 4, 3, 2, 1, 0], x: 0, expected: 5 },\n    { arr: [12, 34, 56, 78, 90], x: 56, expected: 2 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { arr, x, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = searchElement(arr, x);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `arr = ${JSON.stringify(arr)}, x = ${x}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 2, 3, 4, 5], 3, 2),\n    ([10, -20, 30], 50, -1),\n    ([], 5, -1),\n    ([0, 0, 0], 0, 0),\n    ([-1, -2, -3, -4], -3, 2),\n    ([100, 200, 300, 400], 100, 0),\n    ([7, 14, 21, 28, 35, 42], 42, 5),\n    ([999999], 1, -1),\n    ([5, 4, 3, 2, 1, 0], 0, 5),\n    ([12, 34, 56, 78, 90], 56, 2)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    arr, x, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.searchElement(arr, x)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"arr = {arr}, x = {x}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        [1, 2, 3, 4, 5],
        3
      ],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [
        [10, -20, 30],
        50
      ],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [
        [],
        5
      ],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [
        [0, 0, 0],
        0
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        [-1, -2, -3, -4],
        -3
      ],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [
        [100, 200, 300, 400],
        100
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        [7, 14, 21, 28, 35, 42],
        42
      ],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [
        [999999],
        1
      ],
      "expectedOutput": -1,
      "isPublic": false
    },
    {
      "input": [
        [5, 4, 3, 2, 1, 0],
        0
      ],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [
        [12, 34, 56, 78, 90],
        56
      ],
      "expectedOutput": 2,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture"
  ],
  "order": 29
  },
  {
  "title": "Count Occurrences of a Given Element",
  "slug": "count-occurrences-of-a-given-element",
  "problemStatement": "Given an array of integers `arr` and a target integer `x`, write a function to count and return the number of times `x` appears in `arr`.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "arrays",
    "counting",
    "basic-programming"
  ],
  "pattern": [
    "ARRAY_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an array of integers `arr` and a target integer `x`.",
  "outputFormat": "Return an integer representing the frequency/count of `x` in `arr`.",
  "constraints": [
    "0 <= arr.length <= 10^4",
    "-10^9 <= arr[i], x <= 10^9"
  ],
  "examples": [
    {
      "input": "arr = [1, 2, 3, 2, 2, 5], x = 2",
      "output": "3"
    },
    {
      "input": "arr = [10, -20, 30], x = 50",
      "output": "0"
    },
    {
      "input": "arr = [], x = 5",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int countOccurrences(vector<int>& arr, int x) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int countOccurrences(int[] arr, int x) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var countOccurrences = function(arr, x) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def countOccurrences(self, arr: list[int], x: int) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<pair<vector<int>, int>> inputs = {\n        {{1, 2, 3, 2, 2, 5}, 2},\n        {{10, -20, 30}, 50},\n        {{}, 5},\n        {{0, 0, 0, 0}, 0},\n        {{-1, -2, -1, -1, -4}, -1},\n        {{100, 200, 300, 400}, 100},\n        {{7, 14, 7, 28, 7, 42}, 7},\n        {{999999}, 1},\n        {{5, 4, 3, 2, 1, 0}, 0},\n        {{12, 34, 56, 12, 12}, 12}\n    };\n\n    vector<int> expected = {\n        3, 0, 0, 4, 3, 1, 3, 0, 1, 3\n    };\n\n    vector<string> testCasesResult;\n\n    auto arrayToString = [](const vector<int>& v) {\n        string s = \"[\";\n        for(size_t i = 0; i < v.size(); i++) {\n            s += to_string(v[i]);\n            if(i + 1 < v.size()) s += \", \";\n        }\n        s += \"]\";\n        return s;\n    };\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.countOccurrences(inputs[i].first, inputs[i].second);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"arr = \" + arrayToString(inputs[i].first) + \", x = \" + to_string(inputs[i].second);\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    private static String arrayToString(int[] arr) {\n        if (arr == null) return \"null\";\n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < arr.length; i++) {\n            sb.append(arr[i]);\n            if (i + 1 < arr.length) sb.append(\", \");\n        }\n        sb.append(\"]\");\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputsArr = {\n            {1, 2, 3, 2, 2, 5},\n            {10, -20, 30},\n            {},\n            {0, 0, 0, 0},\n            {-1, -2, -1, -1, -4},\n            {100, 200, 300, 400},\n            {7, 14, 7, 28, 7, 42},\n            {999999},\n            {5, 4, 3, 2, 1, 0},\n            {12, 34, 56, 12, 12}\n        };\n\n        int[] inputsX = {\n            2, 50, 5, 0, -1, 100, 7, 1, 0, 12\n        };\n\n        int[] expected = {\n            3, 0, 0, 4, 3, 1, 3, 0, 1, 3\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.countOccurrences(inputsArr[i], inputsX[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"arr = \" + arrayToString(inputsArr[i]) + \", x = \" + inputsX[i];\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { arr: [1, 2, 3, 2, 2, 5], x: 2, expected: 3 },\n    { arr: [10, -20, 30], x: 50, expected: 0 },\n    { arr: [], x: 5, expected: 0 },\n    { arr: [0, 0, 0, 0], x: 0, expected: 4 },\n    { arr: [-1, -2, -1, -1, -4], x: -1, expected: 3 },\n    { arr: [100, 200, 300, 400], x: 100, expected: 1 },\n    { arr: [7, 14, 7, 28, 7, 42], x: 7, expected: 3 },\n    { arr: [999999], x: 1, expected: 0 },\n    { arr: [5, 4, 3, 2, 1, 0], x: 0, expected: 1 },\n    { arr: [12, 34, 56, 12, 12], x: 12, expected: 3 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { arr, x, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = countOccurrences(arr, x);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `arr = ${JSON.stringify(arr)}, x = ${x}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 2, 3, 2, 2, 5], 2, 3),\n    ([10, -20, 30], 50, 0),\n    ([], 5, 0),\n    ([0, 0, 0, 0], 0, 4),\n    ([-1, -2, -1, -1, -4], -1, 3),\n    ([100, 200, 300, 400], 100, 1),\n    ([7, 14, 7, 28, 7, 42], 7, 3),\n    ([999999], 1, 0),\n    ([5, 4, 3, 2, 1, 0], 0, 1),\n    ([12, 34, 56, 12, 12], 12, 3)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    arr, x, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.countOccurrences(arr, x)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\";\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"arr = {arr}, x = {x}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        [1, 2, 3, 2, 2, 5],
        2
      ],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": [
        [10, -20, 30],
        50
      ],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [
        [],
        5
      ],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [
        [0, 0, 0, 0],
        0
      ],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [
        [-1, -2, -1, -1, -4],
        -1
      ],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [
        [100, 200, 300, 400],
        100
      ],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [
        [7, 14, 7, 28, 7, 42],
        7
      ],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [
        [999999],
        1
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        [5, 4, 3, 2, 1, 0],
        0
      ],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [
        [12, 34, 56, 12, 12],
        12
      ],
      "expectedOutput": 3,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture"
  ],
  "order": 30
},
{
  "title": "Find the Second Largest Element",
  "slug": "find-the-second-largest-element",
  "problemStatement": "Given an array of integers `arr`, find and return the second largest distinct element in the array. If no second largest distinct element exists, return `-1`.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "arrays",
    "searching",
    "basic-programming"
  ],
  "pattern": [
    "ARRAY_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an array of integers `arr`.",
  "outputFormat": "Return an integer representing the second largest distinct element, or `-1` if it does not exist.",
  "constraints": [
    "1 <= arr.length <= 10^5",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "examples": [
    {
      "input": "arr = [12, 35, 1, 10, 34, 1]",
      "output": "34"
    },
    {
      "input": "arr = [10, 10, 10]",
      "output": "-1"
    },
    {
      "input": "arr = [5]",
      "output": "-1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int getSecondLargest(vector<int>& arr) {\n        // Write your code here\n        return -1;\n    }\n};",
    "java": "class Solution {\n    public int getSecondLargest(int[] arr) {\n        // Write your code here\n        return -1;\n    }\n}",
    "javascript": "var getSecondLargest = function(arr) {\n    // Write your code here\n    return -1;\n};",
    "python": "class Solution:\n    def getSecondLargest(self, arr: list[int]) -> int:\n        # Write your code here\n        return -1"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<vector<int>> inputs = {\n        {12, 35, 1, 10, 34, 1},\n        {10, 10, 10},\n        {5},\n        {10, 5},\n        {-10, -20, -30, -5},\n        {100, 200, 200, 150},\n        {1, 2, 3, 4, 5},\n        {5, 4, 3, 2, 1},\n        {7, 7, 8, 8, 9, 9},\n        {-1, -1, -1, -2}\n    };\n\n    vector<int> expected = {\n        34, -1, -1, 5, -10, 150, 4, 4, 8, -2\n    };\n\n    vector<string> testCasesResult;\n\n    auto arrayToString = [](const vector<int>& v) {\n        string s = \"[\";\n        for(size_t i = 0; i < v.size(); i++) {\n            s += to_string(v[i]);\n            if(i + 1 < v.size()) s += \", \";\n        }\n        s += \"]\";\n        return s;\n    };\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.getSecondLargest(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"arr = \" + arrayToString(inputs[i]);\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    private static String arrayToString(int[] arr) {\n        if (arr == null) return \"null\";\n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < arr.length; i++) {\n            sb.append(arr[i]);\n            if (i + 1 < arr.length) sb.append(\", \");\n        }\n        sb.append(\"]\");\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputsArr = {\n            {12, 35, 1, 10, 34, 1},\n            {10, 10, 10},\n            {5},\n            {10, 5},\n            {-10, -20, -30, -5},\n            {100, 200, 200, 150},\n            {1, 2, 3, 4, 5},\n            {5, 4, 3, 2, 1},\n            {7, 7, 8, 8, 9, 9},\n            {-1, -1, -1, -2}\n        };\n\n        int[] expected = {\n            34, -1, -1, 5, -10, 150, 4, 4, 8, -2\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.getSecondLargest(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"arr = \" + arrayToString(inputsArr[i]);\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { arr: [12, 35, 1, 10, 34, 1], expected: 34 },\n    { arr: [10, 10, 10], expected: -1 },\n    { arr: [5], expected: -1 },\n    { arr: [10, 5], expected: 5 },\n    { arr: [-10, -20, -30, -5], expected: -10 },\n    { arr: [100, 200, 200, 150], expected: 150 },\n    { arr: [1, 2, 3, 4, 5], expected: 4 },\n    { arr: [5, 4, 3, 2, 1], expected: 4 },\n    { arr: [7, 7, 8, 8, 9, 9], expected: 8 },\n    { arr: [-1, -1, -1, -2], expected: -2 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { arr, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = getSecondLargest(arr);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `arr = ${JSON.stringify(arr)}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([12, 35, 1, 10, 34, 1], 34),\n    ([10, 10, 10], -1),\n    ([5], -1),\n    ([10, 5], 5),\n    ([-10, -20, -30, -5], -10),\n    ([100, 200, 200, 150], 150),\n    ([1, 2, 3, 4, 5], 4),\n    ([5, 4, 3, 2, 1], 4),\n    ([7, 7, 8, 8, 9, 9], 8),\n    ([-1, -1, -1, -2], -2)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    arr, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.getSecondLargest(arr)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"arr = {arr}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        [12, 35, 1, 10, 34, 1]
      ],
      "expectedOutput": 34,
      "isPublic": true
    },
    {
      "input": [
        [10, 10, 10]
      ],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [
        [5]
      ],
      "expectedOutput": -1,
      "isPublic": true
    },
    {
      "input": [
        [10, 5]
      ],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [
        [-10, -20, -30, -5]
      ],
      "expectedOutput": -10,
      "isPublic": false
    },
    {
      "input": [
        [100, 200, 200, 150]
      ],
      "expectedOutput": 150,
      "isPublic": false
    },
    {
      "input": [
        [1, 2, 3, 4, 5]
      ],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [
        [5, 4, 3, 2, 1]
      ],
      "expectedOutput": 4,
      "isPublic": false
    },
    {
      "input": [
        [7, 7, 8, 8, 9, 9]
      ],
      "expectedOutput": 8,
      "isPublic": false
    },
    {
      "input": [
        [-1, -1, -1, -2]
      ],
      "expectedOutput": -2,
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
  "companies": [
    "Wipro",
    "TCS",
    "Infosys",
    "Accenture"
  ],
  "order": 31
  },
  {
  "title": "Reverse an Array",
  "slug": "reverse-an-array",
  "problemStatement": "Given an array of integers `arr`, reverse the array in-place and return the modified array.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "arrays",
    "two-pointers",
    "basic-programming"
  ],
  "pattern": [
    "TWO_POINTERS"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an array of integers `arr`.",
  "outputFormat": "Return the array after reversing its elements in-place.",
  "constraints": [
    "0 <= arr.length <= 10^5",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "examples": [
    {
      "input": "arr = [1, 2, 3, 4, 5]",
      "output": "[5, 4, 3, 2, 1]"
    },
    {
      "input": "arr = [10, 20]",
      "output": "[20, 10]"
    },
    {
      "input": "arr = [1]",
      "output": "[1]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int>& reverseArray(vector<int>& arr) {\n        // Write your code here\n        return arr;\n    }\n};",
    "java": "class Solution {\n    public int[] reverseArray(int[] arr) {\n        // Write your code here\n        return arr;\n    }\n}",
    "javascript": "var reverseArray = function(arr) {\n    // Write your code here\n    return arr;\n};",
    "python": "class Solution:\n    def reverseArray(self, arr: list[int]) -> list[int]:\n        # Write your code here\n        return arr"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<vector<int>> inputs = {\n        {1, 2, 3, 4, 5},\n        {10, 20},\n        {1},\n        {},\n        {4, 5, 1, 2},\n        {-1, -2, -3, -4},\n        {0, 0, 0},\n        {100, 200, 300, 400, 500},\n        {7, 6, 5, 4, 3, 2, 1},\n        {9, -9, 8, -8}\n    };\n\n    vector<vector<int>> expected = {\n        {5, 4, 3, 2, 1},\n        {20, 10},\n        {1},\n        {},\n        {2, 1, 5, 4},\n        {-4, -3, -2, -1},\n        {0, 0, 0},\n        {500, 400, 300, 200, 100},\n        {1, 2, 3, 4, 5, 6, 7},\n        {-8, 8, -9, 9}\n    };\n\n    vector<string> testCasesResult;\n\n    auto arrayToString = [](const vector<int>& v) {\n        string s = \"[\";\n        for(size_t i = 0; i < v.size(); i++) {\n            s += to_string(v[i]);\n            if(i + 1 < v.size()) s += \", \";\n        }\n        s += \"]\";\n        return s;\n    };\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> actual;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.reverseArray(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"arr = \" + arrayToString(inputs[i]);\n        string expectedStr = arrayToString(expected[i]);\n        string actualStr = arrayToString(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    private static String arrayToString(int[] arr) {\n        if (arr == null) return \"null\";\n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < arr.length; i++) {\n            sb.append(arr[i]);\n            if (i + 1 < arr.length) sb.append(\", \");\n        }\n        sb.append(\"]\");\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputsArr = {\n            {1, 2, 3, 4, 5},\n            {10, 20},\n            {1},\n            {},\n            {4, 5, 1, 2},\n            {-1, -2, -3, -4},\n            {0, 0, 0},\n            {100, 200, 300, 400, 500},\n            {7, 6, 5, 4, 3, 2, 1},\n            {9, -9, 8, -8}\n        };\n\n        int[][] expected = {\n            {5, 4, 3, 2, 1},\n            {20, 10},\n            {1},\n            {},\n            {2, 1, 5, 4},\n            {-4, -3, -2, -1},\n            {0, 0, 0},\n            {500, 400, 300, 200, 100},\n            {1, 2, 3, 4, 5, 6, 7},\n            {-8, 8, -9, 9}\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] actual = null;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.reverseArray(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"arr = \" + arrayToString(inputsArr[i]);\n            String expectedStr = arrayToString(expected[i]);\n            String actualStr = arrayToString(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { arr: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },\n    { arr: [10, 20], expected: [20, 10] },\n    { arr: [1], expected: [1] },\n    { arr: [], expected: [] },\n    { arr: [4, 5, 1, 2], expected: [2, 1, 5, 4] },\n    { arr: [-1, -2, -3, -4], expected: [-4, -3, -2, -1] },\n    { arr: [0, 0, 0], expected: [0, 0, 0] },\n    { arr: [100, 200, 300, 400, 500], expected: [500, 400, 300, 200, 100] },\n    { arr: [7, 6, 5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5, 6, 7] },\n    { arr: [9, -9, 8, -8], expected: [-8, 8, -9, 9] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { arr, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = reverseArray(arr);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && JSON.stringify(actual) === JSON.stringify(expected);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `arr = ${JSON.stringify(arr)}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),\n    ([10, 20], [20, 10]),\n    ([1], [1]),\n    ([], []),\n    ([4, 5, 1, 2], [2, 1, 5, 4]),\n    ([-1, -2, -3, -4], [-4, -3, -2, -1]),\n    ([0, 0, 0], [0, 0, 0]),\n    ([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]),\n    ([7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7]),\n    ([9, -9, 8, -8], [-8, 8, -9, 9])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    arr, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.reverseArray(arr)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"arr = {arr}\",\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual),\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        [1, 2, 3, 4, 5]
      ],
      "expectedOutput": [5, 4, 3, 2, 1],
      "isPublic": true
    },
    {
      "input": [
        [10, 20]
      ],
      "expectedOutput": [20, 10],
      "isPublic": true
    },
    {
      "input": [
        [1]
      ],
      "expectedOutput": [1],
      "isPublic": true
    },
    {
      "input": [
        []
      ],
      "expectedOutput": [],
      "isPublic": false
    },
    {
      "input": [
        [4, 5, 1, 2]
      ],
      "expectedOutput": [2, 1, 5, 4],
      "isPublic": false
    },
    {
      "input": [
        [-1, -2, -3, -4]
      ],
      "expectedOutput": [-4, -3, -2, -1],
      "isPublic": false
    },
    {
      "input": [
        [0, 0, 0]
      ],
      "expectedOutput": [0, 0, 0],
      "isPublic": false
    },
    {
      "input": [
        [100, 200, 300, 400, 500]
      ],
      "expectedOutput": [500, 400, 300, 200, 100],
      "isPublic": false
    },
    {
      "input": [
        [7, 6, 5, 4, 3, 2, 1]
      ],
      "expectedOutput": [1, 2, 3, 4, 5, 6, 7],
      "isPublic": false
    },
    {
      "input": [
        [9, -9, 8, -8]
      ],
      "expectedOutput": [-8, 8, -9, 9],
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 32
  },
  {
  "title": "Check Whether an Array is Sorted",
  "slug": "check-whether-an-array-is-sorted",
  "problemStatement": "Given an array of integers `arr`, write a function to check whether the array is sorted in non-decreasing (ascending) order. Return `true` if it is sorted, otherwise return `false`.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "arrays",
    "searching",
    "basic-programming"
  ],
  "pattern": [
    "ARRAY_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides an array of integers `arr`.",
  "outputFormat": "Return a boolean value (`true` or `false`) indicating if the array is sorted in non-decreasing order.",
  "constraints": [
    "0 <= arr.length <= 10^5",
    "-10^9 <= arr[i] <= 10^9"
  ],
  "examples": [
    {
      "input": "arr = [10, 20, 30, 40, 50]",
      "output": "true"
    },
    {
      "input": "arr = [90, 80, 100, 70]",
      "output": "false"
    },
    {
      "input": "arr = [10]",
      "output": "true"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isSorted(vector<int>& arr) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isSorted(int[] arr) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isSorted = function(arr) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isSorted(self, arr: list[int]) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<vector<int>> inputs = {\n        {10, 20, 30, 40, 50},\n        {90, 80, 100, 70},\n        {10},\n        {},\n        {1, 1, 1, 1, 1},\n        {1, 2, 2, 3, 4},\n        {5, 4, 3, 2, 1},\n        {-50, -30, -10, 0, 20},\n        {10, 20, 30, 25, 40},\n        {-10, -20, -30}\n    };\n\n    vector<bool> expected = {\n        true, false, true, true, true, true, false, true, false, false\n    };\n\n    vector<string> testCasesResult;\n\n    auto arrayToString = [](const vector<int>& v) {\n        string s = \"[\";\n        for(size_t i = 0; i < v.size(); i++) {\n            s += to_string(v[i]);\n            if(i + 1 < v.size()) s += \", \";\n        }\n        s += \"]\";\n        return s;\n    };\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.isSorted(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"arr = \" + arrayToString(inputs[i]);\n        string expectedStr = expected[i] ? \"true\" : \"false\";\n        string actualStr = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    private static String arrayToString(int[] arr) {\n        if (arr == null) return \"null\";\n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < arr.length; i++) {\n            sb.append(arr[i]);\n            if (i + 1 < arr.length) sb.append(\", \");\n        }\n        sb.append(\"]\");\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        int[][] inputsArr = {\n            {10, 20, 30, 40, 50},\n            {90, 80, 100, 70},\n            {10},\n            {},\n            {1, 1, 1, 1, 1},\n            {1, 2, 2, 3, 4},\n            {5, 4, 3, 2, 1},\n            {-50, -30, -10, 0, 20},\n            {10, 20, 30, 25, 40},\n            {-10, -20, -30}\n        };\n\n        boolean[] expected = {\n            true, false, true, true, true, true, false, true, false, false\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isSorted(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"arr = \" + arrayToString(inputsArr[i]);\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { arr: [10, 20, 30, 40, 50], expected: true },\n    { arr: [90, 80, 100, 70], expected: false },\n    { arr: [10], expected: true },\n    { arr: [], expected: true },\n    { arr: [1, 1, 1, 1, 1], expected: true },\n    { arr: [1, 2, 2, 3, 4], expected: true },\n    { arr: [5, 4, 3, 2, 1], expected: false },\n    { arr: [-50, -30, -10, 0, 20], expected: true },\n    { arr: [10, 20, 30, 25, 40], expected: false },\n    { arr: [-10, -20, -30], expected: false }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { arr, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = isSorted(arr);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `arr = ${JSON.stringify(arr)}`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ([10, 20, 30, 40, 50], True),\n    ([90, 80, 100, 70], False),\n    ([10], True),\n    ([], True),\n    ([1, 1, 1, 1, 1], True),\n    ([1, 2, 2, 3, 4], True),\n    ([5, 4, 3, 2, 1], False),\n    ([-50, -30, -10, 0, 20], True),\n    ([10, 20, 30, 25, 40], False),\n    ([-10, -20, -30], False)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    arr, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.isSorted(arr)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f\"arr = {arr}\",\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower() if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        [10, 20, 30, 40, 50]
      ],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [
        [90, 80, 100, 70]
      ],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [
        [10]
      ],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [
        []
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        [1, 1, 1, 1, 1]
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        [1, 2, 2, 3, 4]
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        [5, 4, 3, 2, 1]
      ],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [
        [-50, -30, -10, 0, 20]
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        [10, 20, 30, 25, 40]
      ],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [
        [-10, -20, -30]
      ],
      "expectedOutput": false,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 33
  },
  {
  "title": "Find Length of a String",
  "slug": "find-length-of-a-string",
  "problemStatement": "Given a string `s`, write a function to calculate and return the total number of characters in the string.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "strings",
    "basic-programming"
  ],
  "pattern": [
    "STRING_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string `s`.",
  "outputFormat": "Return an integer representing the length of the string.",
  "constraints": [
    "0 <= s.length <= 10^5",
    "String `s` consists of printable ASCII characters."
  ],
  "examples": [
    {
      "input": "s = \"hello\"",
      "output": "5"
    },
    {
      "input": "s = \"coding\"",
      "output": "6"
    },
    {
      "input": "s = \"\"",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int findLength(string s) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int findLength(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var findLength = function(s) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def findLength(self, s: str) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<string> inputs = {\n        \"hello\",\n        \"coding\",\n        \"\",\n        \"a\",\n        \"Hello World!\",\n        \"1234567890\",\n        \"   \",\n        \"special#@$&*\",\n        \"a quick brown fox\",\n        \"supercalifragilisticexpialidocious\"\n    };\n\n    vector<int> expected = {\n        5, 6, 0, 1, 12, 10, 3, 12, 17, 34\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = -1;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.findLength(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"s = \\\"\" + inputs[i] + \"\\\"\";\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(size_t i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        String[] inputsArr = {\n            \"hello\",\n            \"coding\",\n            \"\",\n            \"a\",\n            \"Hello World!\",\n            \"1234567890\",\n            \"   \",\n            \"special#@$&*\",\n            \"a quick brown fox\",\n            \"supercalifragilisticexpialidocious\"\n        };\n\n        int[] expected = {\n            5, 6, 0, 1, 12, 10, 3, 12, 17, 34\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = -1;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.findLength(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"s = \\\"\" + inputsArr[i] + \"\\\"\";\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"hello\", expected: 5 },\n    { s: \"coding\", expected: 6 },\n    { s: \"\", expected: 0 },\n    { s: \"a\", expected: 1 },\n    { s: \"Hello World!\", expected: 12 },\n    { s: \"1234567890\", expected: 10 },\n    { s: \"   \", expected: 3 },\n    { s: \"special#@$&*\", expected: 12 },\n    { s: \"a quick brown fox\", expected: 17 },\n    { s: \"supercalifragilisticexpialidocious\", expected: 34 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = findLength(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `s = \"${s}\"`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"hello\", 5),\n    (\"coding\", 6),\n    (\"\", 0),\n    (\"a\", 1),\n    (\"Hello World!\", 12),\n    (\"1234567890\", 10),\n    (\"   \", 3),\n    (\"special#@$&*\", 12),\n    (\"a quick brown fox\", 17),\n    (\"supercalifragilisticexpialidocious\", 34)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.findLength(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f's = \"{s}\"',\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual) if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        "hello"
      ],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": [
        "coding"
      ],
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": [
        ""
      ],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [
        "a"
      ],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [
        "Hello World!"
      ],
      "expectedOutput": 12,
      "isPublic": false
    },
    {
      "input": [
        "1234567890"
      ],
      "expectedOutput": 10,
      "isPublic": false
    },
    {
      "input": [
        "   "
      ],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [
        "special#@$&*"
      ],
      "expectedOutput": 12,
      "isPublic": false
    },
    {
      "input": [
        "a quick brown fox"
      ],
      "expectedOutput": 17,
      "isPublic": false
    },
    {
      "input": [
        "supercalifragilisticexpialidocious"
      ],
      "expectedOutput": 34,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 34
  },
  {
  "title": "Count Vowels in a String",
  "slug": "count-vowels-in-a-string",
  "problemStatement": "Given a string `s`, write a function to count and return the total number of vowels present in the string. Vowels include both uppercase and lowercase characters: `'a'`, `'e'`, `'i'`, `'o'`, `'u'`, `'A'`, `'E'`, `'I'`, `'O'`, `'U'`.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "strings",
    "basic-programming"
  ],
  "pattern": [
    "STRING_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string `s`.",
  "outputFormat": "Return an integer representing the total count of vowels in the string.",
  "constraints": [
    "0 <= s.length <= 10^5",
    "String `s` consists of printable ASCII characters."
  ],
  "examples": [
    {
      "input": "s = \"hello\"",
      "output": "2"
    },
    {
      "input": "s = \"AEIOU\"",
      "output": "5"
    },
    {
      "input": "s = \"rhythm\"",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int countVowels(string s) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int countVowels(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var countVowels = function(s) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def countVowels(self, s: str) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<string> inputs = {\n        \"hello\",\n        \"AEIOU\",\n        \"rhythm\",\n        \"\",\n        \"Programming\",\n        \"aEiOu\",\n        \"12345\",\n        \"Hello World!\",\n        \"bcdfg\",\n        \"OpenAI ChatBot\"\n    };\n\n    vector<int> expected = {\n        2, 5, 0, 0, 3, 5, 0, 3, 0, 5\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = -1;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.countVowels(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"s = \\\"\" + inputs[i] + \"\\\"\";\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(size_t i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        String[] inputsArr = {\n            \"hello\",\n            \"AEIOU\",\n            \"rhythm\",\n            \"\",\n            \"Programming\",\n            \"aEiOu\",\n            \"12345\",\n            \"Hello World!\",\n            \"bcdfg\",\n            \"OpenAI ChatBot\"\n        };\n\n        int[] expected = {\n            2, 5, 0, 0, 3, 5, 0, 3, 0, 5\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = -1;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.countVowels(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.setOut.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"s = \\\"\" + inputsArr[i] + \"\\\"\";\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"hello\", expected: 2 },\n    { s: \"AEIOU\", expected: 5 },\n    { s: \"rhythm\", expected: 0 },\n    { s: \"\", expected: 0 },\n    { s: \"Programming\", expected: 3 },\n    { s: \"aEiOu\", expected: 5 },\n    { s: \"12345\", expected: 0 },\n    { s: \"Hello World!\", expected: 3 },\n    { s: \"bcdfg\", expected: 0 },\n    { s: \"OpenAI ChatBot\", expected: 5 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = countVowels(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `s = \"${s}\"`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"hello\", 2),\n    (\"AEIOU\", 5),\n    (\"rhythm\", 0),\n    (\"\", 0),\n    (\"Programming\", 3),\n    (\"aEiOu\", 5),\n    (\"12345\", 0),\n    (\"Hello World!\", 3),\n    (\"bcdfg\", 0),\n    (\"OpenAI ChatBot\", 5)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.countVowels(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f's = \"{s}\"',\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual) if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\");"
  },
  "testCases": [
    {
      "input": [
        "hello"
      ],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [
        "AEIOU"
      ],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": [
        "rhythm"
      ],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [
        ""
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        "Programming"
      ],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [
        "aEiOu"
      ],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [
        "12345"
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        "Hello World!"
      ],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [
        "bcdfg"
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        "OpenAI ChatBot"
      ],
      "expectedOutput": 5,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 35
},
{
  "title": "Count Digits in a String",
  "slug": "count-digits-in-a-string",
  "problemStatement": "Given a string `s`, write a function to count and return the total number of numeric digit characters (`'0'` through `'9'`) present in the string.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "strings",
    "basic-programming"
  ],
  "pattern": [
    "STRING_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string `s`.",
  "outputFormat": "Return an integer representing the total count of digits in the string.",
  "constraints": [
    "0 <= s.length <= 10^5",
    "String `s` consists of printable ASCII characters."
  ],
  "examples": [
    {
      "input": "s = \"hello123world\"",
      "output": "3"
    },
    {
      "input": "s = \"2026\"",
      "output": "4"
    },
    {
      "input": "s = \"NoDigitsHere\"",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int countDigits(string s) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int countDigits(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var countDigits = function(s) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def countDigits(self, s: str) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<string> inputs = {\n        \"hello123world\",\n        \"2026\",\n        \"NoDigitsHere\",\n        \"\",\n        \"a1b2c3d4e5\",\n        \"1234567890\",\n        \"Special #123 @456!\",\n        \"   7   \",\n        \"abc def\",\n        \"Version 2.0.1\"\n    };\n\n    vector<int> expected = {\n        3, 4, 0, 0, 5, 10, 6, 1, 0, 3\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = -1;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.countDigits(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"s = \\\"\" + inputs[i] + \"\\\"\";\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(size_t i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        String[] inputsArr = {\n            \"hello123world\",\n            \"2026\",\n            \"NoDigitsHere\",\n            \"\",\n            \"a1b2c3d4e5\",\n            \"1234567890\",\n            \"Special #123 @456!\",\n            \"   7   \",\n            \"abc def\",\n            \"Version 2.0.1\"\n        };\n\n        int[] expected = {\n            3, 4, 0, 0, 5, 10, 6, 1, 0, 3\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = -1;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.countDigits(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.setOut.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"s = \\\"\" + inputsArr[i] + \"\\\"\";\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"hello123world\", expected: 3 },\n    { s: \"2026\", expected: 4 },\n    { s: \"NoDigitsHere\", expected: 0 },\n    { s: \"\", expected: 0 },\n    { s: \"a1b2c3d4e5\", expected: 5 },\n    { s: \"1234567890\", expected: 10 },\n    { s: \"Special #123 @456!\", expected: 6 },\n    { s: \"   7   \", expected: 1 },\n    { s: \"abc def\", expected: 0 },\n    { s: \"Version 2.0.1\", expected: 3 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = countDigits(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `s = \"${s}\"`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"hello123world\", 3),\n    (\"2026\", 4),\n    (\"NoDigitsHere\", 0),\n    (\"\", 0),\n    (\"a1b2c3d4e5\", 5),\n    (\"1234567890\", 10),\n    (\"Special #123 @456!\", 6),\n    (\"   7   \", 1),\n    (\"abc def\", 0),\n    (\"Version 2.0.1\", 3)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.countDigits(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f's = \"{s}\"',\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual) if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        "hello123world"
      ],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": [
        "2026"
      ],
      "expectedOutput": 4,
      "isPublic": true
    },
    {
      "input": [
        "NoDigitsHere"
      ],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [
        ""
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        "a1b2c3d4e5"
      ],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [
        "1234567890"
      ],
      "expectedOutput": 10,
      "isPublic": false
    },
    {
      "input": [
        "Special #123 @456!"
      ],
      "expectedOutput": 6,
      "isPublic": false
    },
    {
      "input": [
        "   7   "
      ],
      "expectedOutput": 1,
      "isPublic": false
    },
    {
      "input": [
        "abc def"
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        "Version 2.0.1"
      ],
      "expectedOutput": 3,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 36
},
{
  "title": "Count Occurrences of a Character",
  "slug": "count-occurrences-of-a-character",
  "problemStatement": "Given a string `s` and a character `ch`, write a function to count and return the number of times `ch` appears in `s`. The search should be case-sensitive.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "strings",
    "basic-programming"
  ],
  "pattern": [
    "STRING_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string `s` and a character `ch`.",
  "outputFormat": "Return an integer representing the frequency of character `ch` in string `s`.",
  "constraints": [
    "0 <= s.length <= 10^5",
    "String `s` and character `ch` consist of printable ASCII characters."
  ],
  "examples": [
    {
      "input": "s = \"hello\", ch = 'l'",
      "output": "2"
    },
    {
      "input": "s = \"programming\", ch = 'g'",
      "output": "2"
    },
    {
      "input": "s = \"abc\", ch = 'z'",
      "output": "0"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int countOccurrences(string s, char ch) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int countOccurrences(String s, char ch) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var countOccurrences = function(s, ch) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def countOccurrences(self, s: str, ch: str) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<pair<string, char>> inputs = {\n        {\"hello\", 'l'},\n        {\"programming\", 'g'},\n        {\"abc\", 'z'},\n        {\"\", 'a'},\n        {\"AAAAA\", 'A'},\n        {\"AaAaAa\", 'a'},\n        {\"123123123\", '1'},\n        {\"  hello  world  \", ' '},\n        {\"special #@$&*#\", '#'},\n        {\"mississippi\", 's'}\n    };\n\n    vector<int> expected = {\n        2, 2, 0, 0, 5, 3, 3, 6, 2, 4\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = -1;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.countOccurrences(inputs[i].first, inputs[i].second);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"s = \\\"\" + inputs[i].first + \"\\\", ch = '\" + string(1, inputs[i].second) + \"'\";\n        string expectedStr = to_string(expected[i]);\n        string actualStr = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(size_t i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    static class TestCase {\n        String s;\n        char ch;\n        TestCase(String s, char ch) {\n            this.s = s;\n            this.ch = ch;\n        }\n    }\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        TestCase[] inputsArr = {\n            new TestCase(\"hello\", 'l'),\n            new TestCase(\"programming\", 'g'),\n            new TestCase(\"abc\", 'z'),\n            new TestCase(\"\", 'a'),\n            new TestCase(\"AAAAA\", 'A'),\n            new TestCase(\"AaAaAa\", 'a'),\n            new TestCase(\"123123123\", '1'),\n            new TestCase(\"  hello  world  \", ' '),\n            new TestCase(\"special #@$&*#\", '#'),\n            new TestCase(\"mississippi\", 's')\n        };\n\n        int[] expected = {\n            2, 2, 0, 0, 5, 3, 3, 6, 2, 4\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = -1;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.countOccurrences(inputsArr[i].s, inputsArr[i].ch);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.setOut.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"s = \\\"\" + inputsArr[i].s + \"\\\", ch = '\" + inputsArr[i].ch + \"'\";\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"hello\", ch: \"l\", expected: 2 },\n    { s: \"programming\", ch: \"g\", expected: 2 },\n    { s: \"abc\", ch: \"z\", expected: 0 },\n    { s: \"\", ch: \"a\", expected: 0 },\n    { s: \"AAAAA\", ch: \"A\", expected: 5 },\n    { s: \"AaAaAa\", ch: \"a\", expected: 3 },\n    { s: \"123123123\", ch: \"1\", expected: 3 },\n    { s: \"  hello  world  \", ch: \" \", expected: 6 },\n    { s: \"special #@$&*#\", ch: \"#\", expected: 2 },\n    { s: \"mississippi\", ch: \"s\", expected: 4 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, ch, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = countOccurrences(s, ch);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `s = \"${s}\", ch = '${ch}'`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"hello\", 'l', 2),\n    (\"programming\", 'g', 2),\n    (\"abc\", 'z', 0),\n    (\"\", 'a', 0),\n    (\"AAAAA\", 'A', 5),\n    (\"AaAaAa\", 'a', 3),\n    (\"123123123\", '1', 3),\n    (\"  hello  world  \", ' ', 6),\n    (\"special #@$&*#\", '#', 2),\n    (\"mississippi\", 's', 4)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s, ch, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.countOccurrences(s, ch)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f's = \"{s}\", ch = \\'{ch}\\'',\n        \"expectedOutput\": str(expected),\n        \"actualOutput\": str(actual) if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        "hello",
        "l"
      ],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [
        "programming",
        "g"
      ],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": [
        "abc",
        "z"
      ],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": [
        "",
        "a"
      ],
      "expectedOutput": 0,
      "isPublic": false
    },
    {
      "input": [
        "AAAAA",
        "A"
      ],
      "expectedOutput": 5,
      "isPublic": false
    },
    {
      "input": [
        "AaAaAa",
        "a"
      ],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [
        "123123123",
        "1"
      ],
      "expectedOutput": 3,
      "isPublic": false
    },
    {
      "input": [
        "  hello  world  ",
        " "
      ],
      "expectedOutput": 6,
      "isPublic": false
    },
    {
      "input": [
        "special #@$&*#",
        "#"
      ],
      "expectedOutput": 2,
      "isPublic": false
    },
    {
      "input": [
        "mississippi",
        "s"
      ],
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 37
  },
  {
  "title": "Reverse a String",
  "slug": "reverse-a-string",
  "problemStatement": "Given a string `s`, write a function to reverse the string and return the reversed result.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "strings",
    "basic-programming"
  ],
  "pattern": [
    "TWO_POINTERS",
    "STRING_TRAVERSAL"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string `s`.",
  "outputFormat": "Return a string which is the reverse of `s`.",
  "constraints": [
    "0 <= s.length <= 10^5",
    "String `s` consists of printable ASCII characters."
  ],
  "examples": [
    {
      "input": "s = \"hello\"",
      "output": "\"olleh\""
    },
    {
      "input": "s = \"world\"",
      "output": "\"dlrow\""
    },
    {
      "input": "s = \"a\"",
      "output": "\"a\""
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string reverseString(string s) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var reverseString = function(s) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def reverseString(self, s: str) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<string> inputs = {\n        \"hello\",\n        \"world\",\n        \"a\",\n        \"\",\n        \"racecar\",\n        \"12345\",\n        \"Hello World!\",\n        \"   \",\n        \"special#@$&*\",\n        \"OpenAI\"\n    };\n\n    vector<string> expected = {\n        \"olleh\",\n        \"dlrow\",\n        \"a\",\n        \"\",\n        \"racecar\",\n        \"54321\",\n        \"!dlroW olleH\",\n        \"   \",\n        \"*&$@#laiceps\",\n        \"IAnepO\"\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        string actual;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.reverseString(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"s = \\\"\" + inputs[i] + \"\\\"\";\n        string expectedStr = \"\\\"\" + expected[i] + \"\\\"\";\n        string actualStr = \"\\\"\" + actual + \"\\\"\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \" + expectedStr + \",\\n\"\n            \"      actualOutput: \" + actualStr + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(size_t i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        String[] inputsArr = {\n            \"hello\",\n            \"world\",\n            \"a\",\n            \"\",\n            \"racecar\",\n            \"12345\",\n            \"Hello World!\",\n            \"   \",\n            \"special#@$&*\",\n            \"OpenAI\"\n        };\n\n        String[] expected = {\n            \"olleh\",\n            \"dlrow\",\n            \"a\",\n            \"\",\n            \"racecar\",\n            \"54321\",\n            \"!dlroW olleH\",\n            \"   \",\n            \"*&$@#laiceps\",\n            \"IAnepO\"\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            String actual = null;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.reverseString(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.setOut.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && expected[i].equals(actual);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"s = \\\"\" + inputsArr[i] + \"\\\"\";\n            String expectedStr = \"\\\"\" + expected[i] + \"\\\"\";\n            String actualStr = actual != null ? \"\\\"\" + actual + \"\\\"\" : \"null\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \" + expectedStr + \",\\n\" +\n                \"      actualOutput: \" + actualStr + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"hello\", expected: \"olleh\" },\n    { s: \"world\", expected: \"dlrow\" },\n    { s: \"a\", expected: \"a\" },\n    { s: \"\", expected: \"\" },\n    { s: \"racecar\", expected: \"racecar\" },\n    { s: \"12345\", expected: \"54321\" },\n    { s: \"Hello World!\", expected: \"!dlroW olleH\" },\n    { s: \"   \", expected: \"   \" },\n    { s: \"special#@$&*\", expected: \"*&$@#laiceps\" },\n    { s: \"OpenAI\", expected: \"IAnepO\" }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = reverseString(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `s = \"${s}\"`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"hello\", \"olleh\"),\n    (\"world\", \"dlrow\"),\n    (\"a\", \"a\"),\n    (\"\", \"\"),\n    (\"racecar\", \"racecar\"),\n    (\"12345\", \"54321\"),\n    (\"Hello World!\", \"!dlroW olleH\"),\n    (\"   \", \"   \"),\n    (\"special#@$&*\", \"*&$@#laiceps\"),\n    (\"OpenAI\", \"IAnepO\")\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.reverseString(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f's = \"{s}\"',\n        \"expectedOutput\": f'\"{expected}\"',\n        \"actualOutput\": f'\"{actual}\"' if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        "hello"
      ],
      "expectedOutput": "olleh",
      "isPublic": true
    },
    {
      "input": [
        "world"
      ],
      "expectedOutput": "dlrow",
      "isPublic": true
    },
    {
      "input": [
        "a"
      ],
      "expectedOutput": "a",
      "isPublic": true
    },
    {
      "input": [
        ""
      ],
      "expectedOutput": "",
      "isPublic": false
    },
    {
      "input": [
        "racecar"
      ],
      "expectedOutput": "racecar",
      "isPublic": false
    },
    {
      "input": [
        "12345"
      ],
      "expectedOutput": "54321",
      "isPublic": false
    },
    {
      "input": [
        "Hello World!"
      ],
      "expectedOutput": "!dlroW olleH",
      "isPublic": false
    },
    {
      "input": [
        "   "
      ],
      "expectedOutput": "   ",
      "isPublic": false
    },
    {
      "input": [
        "special#@$&*"
      ],
      "expectedOutput": "*&$@#laiceps",
      "isPublic": false
    },
    {
      "input": [
        "OpenAI"
      ],
      "expectedOutput": "IAnepO",
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 38
  },
  {
  "title": "Check Palindrome String",
  "slug": "check-palindrome-string",
  "problemStatement": "Given a string `s`, write a function to determine if it is a palindrome. A string is considered a palindrome if it reads the same backward as forward. The check should be case-sensitive.",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "strings",
    "basic-programming"
  ],
  "pattern": [
    "TWO_POINTERS"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string `s`.",
  "outputFormat": "Return a boolean (`true` or `false`) indicating whether the string `s` is a palindrome.",
  "constraints": [
    "0 <= s.length <= 10^5",
    "String `s` consists of printable ASCII characters."
  ],
  "examples": [
    {
      "input": "s = \"racecar\"",
      "output": "true"
    },
    {
      "input": "s = \"hello\"",
      "output": "false"
    },
    {
      "input": "s = \"a\"",
      "output": "true"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isPalindrome = function(s) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<string> inputs = {\n        \"racecar\",\n        \"hello\",\n        \"a\",\n        \"\",\n        \"madam\",\n        \"Racecar\",\n        \"12321\",\n        \"123321\",\n        \"ab\",\n        \"  \"\n    };\n\n    vector<bool> expected = {\n        true, false, true, true, true, false, true, true, false, true\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.isPalindrome(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"s = \\\"\" + inputs[i] + \"\\\"\";\n        string expectedStr = expected[i] ? \"true\" : \"false\";\n        string actualStr = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(size_t i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        String[] inputsArr = {\n            \"racecar\",\n            \"hello\",\n            \"a\",\n            \"\",\n            \"madam\",\n            \"Racecar\",\n            \"12321\",\n            \"123321\",\n            \"ab\",\n            \"  \"\n        };\n\n        boolean[] expected = {\n            true, false, true, true, true, false, true, true, false, true\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isPalindrome(inputsArr[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.setOut.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"s = \\\"\" + inputsArr[i] + \"\\\"\";\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"racecar\", expected: true },\n    { s: \"hello\", expected: false },\n    { s: \"a\", expected: true },\n    { s: \"\", expected: true },\n    { s: \"madam\", expected: true },\n    { s: \"Racecar\", expected: false },\n    { s: \"12321\", expected: true },\n    { s: \"123321\", expected: true },\n    { s: \"ab\", expected: false },\n    { s: \"  \", expected: true }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = isPalindrome(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `s = \"${s}\"`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"racecar\", True),\n    (\"hello\", False),\n    (\"a\", True),\n    (\"\", True),\n    (\"madam\", True),\n    (\"Racecar\", False),\n    (\"12321\", True),\n    (\"123321\", True),\n    (\"ab\", False),\n    (\"  \", True)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s, expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.isPalindrome(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f's = \"{s}\"',\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower() if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        "racecar"
      ],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [
        "hello"
      ],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [
        "a"
      ],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [
        ""
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "madam"
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "Racecar"
      ],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [
        "12321"
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "123321"
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "ab"
      ],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [
        "  "
      ],
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
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 39
  },
  {
  "title": "Compare Two Strings",
  "slug": "compare-two-strings",
  "problemStatement": "Given two strings `s1` and `s2`, write a function to determine if both strings are equal. Two strings are considered equal if they have the exact same length and contain the exact same characters in the exact same sequence (case-sensitive).",
  "topic": "BASIC_PROGRAMMING",
  "subTopics": [],
  "tags": [
    "strings",
    "basic-programming"
  ],
  "pattern": [
    "TWO_POINTERS"
  ],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two strings `s1` and `s2`.",
  "outputFormat": "Return a boolean (`true` or `false`) indicating whether `s1` and `s2` are equal.",
  "constraints": [
    "0 <= s1.length, s2.length <= 10^5",
    "Strings `s1` and `s2` consist of printable ASCII characters."
  ],
  "examples": [
    {
      "input": "s1 = \"hello\", s2 = \"hello\"",
      "output": "true"
    },
    {
      "input": "s1 = \"hello\", s2 = \"Hello\"",
      "output": "false"
    },
    {
      "input": "s1 = \"abc\", s2 = \"abcd\"",
      "output": "false"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool compareStrings(string s1, string s2) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean compareStrings(String s1, String s2) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var compareStrings = function(s1, s2) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def compareStrings(self, s1: str, s2: str) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    int totalTestCases = 10;\n    int passedTestCases = 0;\n\n    vector<pair<string, string>> inputs = {\n        {\"hello\", \"hello\"},\n        {\"hello\", \"Hello\"},\n        {\"abc\", \"abcd\"},\n        {\"\", \"\"},\n        {\"code\", \"code\"},\n        {\"12345\", \"12345\"},\n        {\"12345\", \"12346\"},\n        {\"  \", \"  \"},\n        {\"a\", \"A\"},\n        {\"programming\", \"program\"}\n    };\n\n    vector<bool> expected = {\n        true, false, false, true, true, true, false, true, false, false\n    };\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        bool runtimeError = false;\n\n        try {\n            actual = solution.compareStrings(inputs[i].first, inputs[i].second);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && (actual == expected[i]);\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string inputStr = \"s1 = \\\"\" + inputs[i].first + \"\\\", s2 = \\\"\" + inputs[i].second + \"\\\"\";\n        string expectedStr = expected[i] ? \"true\" : \"false\";\n        string actualStr = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \\\"\" + inputStr + \"\\\",\\n\"\n            \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\"\n            \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(size_t i = 0; i < testCasesResult.size(); i++) {\n\n        cout << testCasesResult[i];\n\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        int totalTestCases = 10;\n        int passedTestCases = 0;\n\n        String[][] inputsArr = {\n            {\"hello\", \"hello\"},\n            {\"hello\", \"Hello\"},\n            {\"abc\", \"abcd\"},\n            {\"\", \"\"},\n            {\"code\", \"code\"},\n            {\"12345\", \"12345\"},\n            {\"12345\", \"12346\"},\n            {\"  \", \"  \"},\n            {\"a\", \"A\"},\n            {\"programming\", \"program\"}\n        };\n\n        boolean[] expected = {\n            true, false, false, true, true, true, false, true, false, false\n        };\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.compareStrings(inputsArr[i][0], inputsArr[i][1]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.setOut.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && (actual == expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String inputStr = \"s1 = \\\"\" + inputsArr[i][0] + \"\\\", s2 = \\\"\" + inputsArr[i][1] + \"\\\"\";\n            String expectedStr = String.valueOf(expected[i]);\n            String actualStr = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \\\"\" + inputStr + \"\\\",\\n\" +\n                \"      expectedOutput: \\\"\" + expectedStr + \"\\\",\\n\" +\n                \"      actualOutput: \\\"\" + actualStr + \"\\\",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\"\", \"\\\\\\\"\")\n                                      .replace(\"\\n\", \"\\\\n\")\n                                      .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n\n            System.out.print(testCasesResult.get(i));\n\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s1: \"hello\", s2: \"hello\", expected: true },\n    { s1: \"hello\", s2: \"Hello\", expected: false },\n    { s1: \"abc\", s2: \"abcd\", expected: false },\n    { s1: \"\", s2: \"\", expected: true },\n    { s1: \"code\", s2: \"code\", expected: true },\n    { s1: \"12345\", s2: \"12345\", expected: true },\n    { s1: \"12345\", s2: \"12346\", expected: false },\n    { s1: \"  \", s2: \"  \", expected: true },\n    { s1: \"a\", s2: \"A\", expected: false },\n    { s1: \"programming\", s2: \"program\", expected: false }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s1, s2, expected } = testCases[i];\n\n    let actual = null;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = compareStrings(s1, s2);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: `s1 = \"${s1}\", s2 = \"${s2}\"`,\n        expectedOutput: JSON.stringify(expected),\n        actualOutput: JSON.stringify(actual),\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\n\nconsole.log(\n    \"  totalTestCases: \" + totalTestCases + \",\"\n);\n\nconsole.log(\n    \"  passedTestCases: \" + passedTestCases + \",\"\n);\n\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \\\"\" + result.input + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + result.expectedOutput + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + result.actualOutput + \"\\\",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    ((\"hello\", \"hello\"), True),\n    ((\"hello\", \"Hello\"), False),\n    ((\"abc\", \"abcd\"), False),\n    ((\"\", \"\"), True),\n    ((\"code\", \"code\"), True),\n    ((\"12345\", \"12345\"), True),\n    ((\"12345\", \"12346\"), False),\n    ((\"  \", \"  \"), True),\n    ((\"a\", \"A\"), False),\n    ((\"programming\", \"program\"), False)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    (s1, s2), expected = test_cases[i]\n\n    actual = None\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.compareStrings(s1, s2)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": f's1 = \"{s1}\", s2 = \"{s2}\"',\n        \"expectedOutput\": str(expected).lower(),\n        \"actualOutput\": str(actual).lower() if actual is not None else \"None\",\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\n\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\n\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\n\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\"', '\\\\\"')\n                                             .replace(\"\\n\", \"\\\\n\")\n                                             .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + result[\"status\"] + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    )\n\nprint(\"  ]\");\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": [
        "hello",
        "hello"
      ],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": [
        "hello",
        "Hello"
      ],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [
        "abc",
        "abcd"
      ],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": [
        "",
        ""
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "code",
        "code"
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "12345",
        "12345"
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "12345",
        "12346"
      ],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [
        "  ",
        "  "
      ],
      "expectedOutput": true,
      "isPublic": false
    },
    {
      "input": [
        "a",
        "A"
      ],
      "expectedOutput": false,
      "isPublic": false
    },
    {
      "input": [
        "programming",
        "program"
      ],
      "expectedOutput": false,
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
  "companies": [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Cognizant"
  ],
  "order": 40
  }

]