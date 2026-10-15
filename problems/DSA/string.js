[
    {
  "title": "Count Vowels and Consonants",
  "slug": "count-vowels-and-consonants",
  "problemStatement": "Given a string s consisting of English letters, write a function to count and return the total number of vowels ('a', 'e', 'i', 'o', 'u' case-insensitive) and consonants present in the string. Return the result as an array containing two integers: [vowel_count, consonant_count].",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "loops", "character-manipulation"],
  "pattern": ["STRING_TRAVERSAL"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string s for each test case.",
  "outputFormat": "Return an array of two integers: [vowels, consonants].",
  "constraints": [
    "1 <= s.length <= 10^5",
    "s consists of English letters (uppercase and lowercase)."
  ],
  "examples": [
    {
      "input": "s = \"Hello World\"",
      "output": "[3, 7]"
    },
    {
      "input": "s = \"Programming\"",
      "output": "[3, 8]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<int> countVowelsAndConsonants(string s) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public int[] countVowelsAndConsonants(String s) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
    "javascript": "var countVowelsAndConsonants = function(s) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def countVowelsAndConsonants(self, s):\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputs = {\n        \"Hello World\",\n        \"Programming\",\n        \"AEIOU\",\n        \"bcdfg\",\n        \"a\",\n        \"Algorithms\",\n        \"DataStructure\",\n        \"OpenAI\",\n        \"Developer\",\n        \"AEiouAEiou\"\n    };\n\n    vector<vector<int>> expected = {\n        {3, 7},\n        {3, 8},\n        {5, 0},\n        {0, 5},\n        {1, 0},\n        {4, 6},\n        {6, 7},\n        {4, 2},\n        {4, 5},\n        {10, 0}\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        vector<int> actual;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.countVowelsAndConsonants(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"\\\"\" + inputs[i] + \"\\\"\";\n\n        string expectedOutput = \"[\";\n        for(int j = 0; j < expected[i].size(); j++) {\n            expectedOutput += to_string(expected[i][j]);\n            if(j + 1 < expected[i].size())\n                expectedOutput += \", \";\n        }\n        expectedOutput += \"]\";\n\n        string actualOutput = \"[\";\n        for(int j = 0; j < actual.size(); j++) {\n            actualOutput += to_string(actual[j]);\n            if(j + 1 < actual.size())\n                actualOutput += \", \";\n        }\n        actualOutput += \"]\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputs = {\n            \"Hello World\",\n            \"Programming\",\n            \"AEIOU\",\n            \"bcdfg\",\n            \"a\",\n            \"Algorithms\",\n            \"DataStructure\",\n            \"OpenAI\",\n            \"Developer\",\n            \"AEiouAEiou\"\n        };\n\n        int[][] expected = {\n            {3, 7},\n            {3, 8},\n            {5, 0},\n            {0, 5},\n            {1, 0},\n            {4, 6},\n            {6, 7},\n            {4, 2},\n            {4, 5},\n            {10, 0}\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int[] actual = new int[]{};\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.countVowelsAndConsonants(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError &&\n                java.util.Arrays.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"\\\"\" + inputs[i] + \"\\\"\";\n\n            StringBuilder expectedOutput = new StringBuilder(\"[\");\n            for(int j = 0; j < expected[i].length; j++) {\n                expectedOutput.append(expected[i][j]);\n                if(j + 1 < expected[i].length)\n                    expectedOutput.append(\", \");\n            }\n            expectedOutput.append(\"]\");\n\n            StringBuilder actualOutput = new StringBuilder(\"[\");\n            if(actual != null) {\n                for(int j = 0; j < actual.length; j++) {\n                    actualOutput.append(actual[j]);\n                    if(j + 1 < actual.length)\n                        actualOutput.append(\", \");\n                }\n            }\n            actualOutput.append(\"]\");\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"Hello World\", expected: [3, 7] },\n    { s: \"Programming\", expected: [3, 8] },\n    { s: \"AEIOU\", expected: [5, 0] },\n    { s: \"bcdfg\", expected: [0, 5] },\n    { s: \"a\", expected: [1, 0] },\n    { s: \"Algorithms\", expected: [4, 6] },\n    { s: \"DataStructure\", expected: [6, 7] },\n    { s: \"OpenAI\", expected: [4, 2] },\n    { s: \"Developer\", expected: [4, 5] },\n    { s: \"AEiouAEiou\", expected: [10, 0] }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = [];\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = countVowelsAndConsonants(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError &&\n        Array.isArray(actual) &&\n        actual.length === expected.length &&\n        actual.every((value, index) => value === expected[index]);\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: s,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"Hello World\", [3, 7]),\n    (\"Programming\", [3, 8]),\n    (\"AEIOU\", [5, 0]),\n    (\"bcdfg\", [0, 5]),\n    (\"a\", [1, 0]),\n    (\"Algorithms\", [4, 6]),\n    (\"DataStructure\", [6, 7]),\n    (\"OpenAI\", [4, 2]),\n    (\"Developer\", [4, 5]),\n    (\"AEiouAEiou\", [10, 0])\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = []\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.countVowelsAndConsonants(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": s,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": "Hello World",
      "expectedOutput": [3, 7],
      "isPublic": true
    },
    {
      "input": "Programming",
      "expectedOutput": [3, 8],
      "isPublic": true
    },
    {
      "input": "AEIOU",
      "expectedOutput": [5, 0],
      "isPublic": true
    },
    {
      "input": "bcdfg",
      "expectedOutput": [0, 5],
      "isPublic": true
    },
    {
      "input": "a",
      "expectedOutput": [1, 0],
      "isPublic": true
    },
    {
      "input": "Algorithms",
      "expectedOutput": [4, 6],
      "isPublic": true
    },
    {
      "input": "DataStructure",
      "expectedOutput": [6, 7],
      "isPublic": true
    },
    {
      "input": "OpenAI",
      "expectedOutput": [4, 2],
      "isPublic": true
    },
    {
      "input": "Developer",
      "expectedOutput": [4, 5],
      "isPublic": true
    },
    {
      "input": "AEiouAEiou",
      "expectedOutput": [10, 0],
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
  "companies": ["TCS"],
  "order": 1
},

{
  "title": "Valid Anagram",
  "slug": "valid-anagram",
  "problemStatement": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "hash-table", "sorting"],
  "pattern": ["HASH_MAP", "FREQUENCY_COUNTER"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides two strings s and t for each test case.",
  "outputFormat": "Return a boolean value (true or false).",
  "constraints": [
    "1 <= s.length, t.length <= 5 * 10^4",
    "s and t consist of lowercase English letters."
  ],
  "examples": [
    {
      "input": "s = \"anagram\", t = \"nagaram\"",
      "output": "true"
    },
    {
      "input": "s = \"rat\", t = \"car\"",
      "output": "false"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your code here\n        return false;\n    }\n};",
    "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n        return false;\n    }\n}",
    "javascript": "var isAnagram = function(s, t) {\n    // Write your code here\n    return false;\n};",
    "python": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your code here\n        return False"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputsS = {\"anagram\", \"rat\", \"aacc\", \"listen\", \"a\", \"ab\", \"rat\", \"bbcc\", \"hellow\", \"car\"};\n    vector<string> inputsT = {\"nagaram\", \"car\", \"ccac\", \"silent\", \"ab\", \"a\", \"art\", \"bcbc\", \"worlde\", \"tar\"};\n    vector<bool> expected = {true, false, false, true, false, false, true, true, false, false};\n\n    int totalTestCases = inputsS.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        bool actual = false;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.isAnagram(inputsS[i], inputsT[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\\\"\" + inputsS[i] + \"\\\", \\\"\" + inputsT[i] + \"\\\"]\";\n        string expectedOutput = expected[i] ? \"true\" : \"false\";\n        string actualOutput = actual ? \"true\" : \"false\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputsS = {\"anagram\", \"rat\", \"aacc\", \"listen\", \"a\", \"ab\", \"rat\", \"bbcc\", \"hellow\", \"car\"};\n        String[] inputsT = {\"nagaram\", \"car\", \"ccac\", \"silent\", \"ab\", \"a\", \"art\", \"bcbc\", \"worlde\", \"tar\"};\n        boolean[] expected = {true, false, false, true, false, false, true, true, false, false};\n\n        int totalTestCases = inputsS.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            boolean actual = false;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.isAnagram(inputsS[i], inputsT[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"[\\\"\" + inputsS[i] + \"\\\", \\\"\" + inputsT[i] + \"\\\"]\";\n            String expectedOutput = expected[i] ? \"true\" : \"false\";\n            String actualOutput = actual ? \"true\" : \"false\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"anagram\", t: \"nagaram\", expected: true },\n    { s: \"rat\", t: \"car\", expected: false },\n    { s: \"aacc\", t: \"ccac\", expected: false },\n    { s: \"listen\", t: \"silent\", expected: true },\n    { s: \"a\", t: \"ab\", expected: false },\n    { s: \"ab\", t: \"a\", expected: false },\n    { s: \"rat\", t: \"art\", expected: true },\n    { s: \"bbcc\", t: \"bcbc\", expected: true },\n    { s: \"hellow\", t: \"worlde\", expected: false },\n    { s: \"car\", t: \"tar\", expected: false }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, t, expected } = testCases[i];\n\n    let actual = false;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = isAnagram(s, t);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [s, t],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"anagram\", \"nagaram\", True),\n    (\"rat\", \"car\", False),\n    (\"aacc\", \"ccac\", False),\n    (\"listen\", \"silent\", True),\n    (\"a\", \"ab\", False),\n    (\"ab\", \"a\", False),\n    (\"rat\", \"art\", True),\n    (\"bbcc\", \"bcbc\", True),\n    (\"hellow\", \"worlde\", False),\n    (\"car\", \"tar\", False)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s = test_cases[i][0]\n    t = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = False\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.isAnagram(s, t)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [s, t],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]).lower() + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]).lower() + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": ["anagram", "nagaram"],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": ["rat", "car"],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": ["aacc", "ccac"],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": ["listen", "silent"],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": ["a", "ab"],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": ["ab", "a"],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": ["rat", "art"],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": ["bbcc", "bcbc"],
      "expectedOutput": true,
      "isPublic": true
    },
    {
      "input": ["hellow", "worlde"],
      "expectedOutput": false,
      "isPublic": true
    },
    {
      "input": ["car", "tar"],
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
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)",
  "companies": ["TCS", "Infosys", "Wipro"],
  "order": 2
},
{
  "title": "Remove Duplicate Characters",
  "slug": "remove-duplicate-characters",
  "problemStatement": "Given a string s, remove all duplicate characters from it in-place or return a new string such that each character appears only once, preserving the original relative order of their first appearance.",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "hash-table", "two-pointers"],
  "pattern": ["HASH_SET", "FREQUENCY_COUNTER"],
  "difficulty": "EASY",
  "inputFormat": "The driver provides a string s for each test case.",
  "outputFormat": "Return the modified string after removing all duplicate characters.",
  "constraints": [
    "1 <= s.length <= 10^5",
    "s consists of English letters (uppercase and lowercase)."
  ],
  "examples": [
    {
      "input": "s = \"programming\"",
      "output": "\"progamin\""
    },
    {
      "input": "s = \"geeksforgeeks\"",
      "output": "\"geksfor\""
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string removeDuplicateCharacters(string s) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String removeDuplicateCharacters(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var removeDuplicateCharacters = function(s) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def removeDuplicateCharacters(self, s: str) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputs = {\n        \"programming\",\n        \"geeksforgeeks\",\n        \"leetcode\",\n        \"aaaaa\",\n        \"abc\",\n        \"hello\",\n        \"banana\",\n        \"abacaba\",\n        \"z\",\n        \"aabbccddeeff\"\n    };\n\n    vector<string> expected = {\n        \"progamin\",\n        \"geksfor\",\n        \"letcod\",\n        \"a\",\n        \"abc\",\n        \"helo\",\n        \"ban\",\n        \"abc\",\n        \"z\",\n        \"abcdef\"\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        string actual = \"\";\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.removeDuplicateCharacters(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"\\\"\" + inputs[i] + \"\\\"\";\n        string expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n        string actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputs = {\n            \"programming\",\n            \"geeksforgeeks\",\n            \"leetcode\",\n            \"aaaaa\",\n            \"abc\",\n            \"hello\",\n            \"banana\",\n            \"abacaba\",\n            \"z\",\n            \"aabbccddeeff\"\n        };\n\n        String[] expected = {\n            \"progamin\",\n            \"geksfor\",\n            \"letcod\",\n            \"a\",\n            \"abc\",\n            \"helo\",\n            \"ban\",\n            \"abc\",\n            \"z\",\n            \"abcdef\"\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            String actual = \"\";\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.removeDuplicateCharacters(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && java.util.Objects.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"\\\"\" + inputs[i] + \"\\\"\";\n            String expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n            String actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"programming\", expected: \"progamin\" },\n    { s: \"geeksforgeeks\", expected: \"geksfor\" },\n    { s: \"leetcode\", expected: \"letcod\" },\n    { s: \"aaaaa\", expected: \"a\" },\n    { s: \"abc\", expected: \"abc\" },\n    { s: \"hello\", expected: \"helo\" },\n    { s: \"banana\", expected: \"ban\" },\n    { s: \"abacaba\", expected: \"abc\" },\n    { s: \"z\", expected: \"z\" },\n    { s: \"aabbccddeeff\", expected: \"abcdef\" }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = \"\";\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = removeDuplicateCharacters(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: s,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"programming\", \"progamin\"),\n    (\"geeksforgeeks\", \"geksfor\"),\n    (\"leetcode\", \"letcod\"),\n    (\"aaaaa\", \"a\"),\n    (\"abc\", \"abc\"),\n    (\"hello\", \"helo\"),\n    (\"banana\", \"ban\"),\n    (\"abacaba\", \"abc\"),\n    (\"z\", \"z\"),\n    (\"aabbccddeeff\", \"abcdef\")\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = \"\"\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.removeDuplicateCharacters(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": s,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": "programming",
      "expectedOutput": "progamin",
      "isPublic": true
    },
    {
      "input": "geeksforgeeks",
      "expectedOutput": "geksfor",
      "isPublic": true
    },
    {
      "input": "leetcode",
      "expectedOutput": "letcod",
      "isPublic": true
    },
    {
      "input": "aaaaa",
      "expectedOutput": "a",
      "isPublic": true
    },
    {
      "input": "abc",
      "expectedOutput": "abc",
      "isPublic": true
    },
    {
      "input": "hello",
      "expectedOutput": "helo",
      "isPublic": true
    },
    {
      "input": "banana",
      "expectedOutput": "ban",
      "isPublic": true
    },
    {
      "input": "abacaba",
      "expectedOutput": "abc",
      "isPublic": true
    },
    {
      "input": "z",
      "expectedOutput": "z",
      "isPublic": true
    },
    {
      "input": "aabbccddeeff",
      "expectedOutput": "abcdef",
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
  "expectedSpaceComplexity": "O(1) or O(N)",
  "companies": ["TCS", "Infosys", "Wipro", "Accenture"],
  "order": 3
},
{
  "title": "Longest Substring Without Repeating Characters",
  "slug": "longest-substring-without-repeating-characters",
  "problemStatement": "Given a string s, find the length of the longest substring without repeating characters.",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "sliding-window", "hash-table"],
  "pattern": ["SLIDING_WINDOW"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides a string s for each test case.",
  "outputFormat": "Return an integer representing the length of the longest substring without repeating characters.",
  "constraints": [
    "0 <= s.length <= 5 * 10^4",
    "s consists of English letters, digits, symbols and spaces."
  ],
  "examples": [
    {
      "input": "s = \"abcabcbb\"",
      "output": "3"
    },
    {
      "input": "s = \"bbbbb\"",
      "output": "1"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var lengthOfLongestSubstring = function(s) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputs = {\n        \"abcabcbb\",\n        \"bbbbb\",\n        \"pwwkew\",\n        \"\",\n        \"au\",\n        \"dvdf\",\n        \"abba\",\n        \"tmmzuxt\",\n        \"abcdef\",\n        \"aab\"\n    };\n\n    vector<int> expected = {\n        3,\n        1,\n        3,\n        0,\n        2,\n        3,\n        2,\n        5,\n        6,\n        2\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.lengthOfLongestSubstring(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"\\\"\" + inputs[i] + \"\\\"\";\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputs = {\n            \"abcabcbb\",\n            \"bbbbb\",\n            \"pwwkew\",\n            \"\",\n            \"au\",\n            \"dvdf\",\n            \"abba\",\n            \"tmmzuxt\",\n            \"abcdef\",\n            \"aab\"\n        };\n\n        int[] expected = {\n            3,\n            1,\n            3,\n            0,\n            2,\n            3,\n            2,\n            5,\n            6,\n            2\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.lengthOfLongestSubstring(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"\\\"\" + inputs[i] + \"\\\"\";\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"abcabcbb\", expected: 3 },\n    { s: \"bbbbb\", expected: 1 },\n    { s: \"pwwkew\", expected: 3 },\n    { s: \"\", expected: 0 },\n    { s: \"au\", expected: 2 },\n    { s: \"dvdf\", expected: 3 },\n    { s: \"abba\", expected: 2 },\n    { s: \"tmmzuxt\", expected: 5 },\n    { s: \"abcdef\", expected: 6 },\n    { s: \"aab\", expected: 2 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = lengthOfLongestSubstring(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: s,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"abcabcbb\", 3),\n    (\"bbbbb\", 1),\n    (\"pwwkew\", 3),\n    (\"\", 0),\n    (\"au\", 2),\n    (\"dvdf\", 3),\n    (\"abba\", 2),\n    (\"tmmzuxt\", 5),\n    (\"abcdef\", 6),\n    (\"aab\", 2)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.lengthOfLongestSubstring(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError && actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": s,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": "abcabcbb",
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": "bbbbb",
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": "pwwkew",
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": "",
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": "au",
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": "dvdf",
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": "abba",
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": "tmmzuxt",
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": "abcdef",
      "expectedOutput": 6,
      "isPublic": true
    },
    {
      "input": "aab",
      "expectedOutput": 2,
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
  "expectedSpaceComplexity": "O(min(N, charset_size))",
  "companies": ["Amazon", "Google", "Microsoft", "Meta", "TCS", "Infosys"],
  "order": 4
},
{
  "title": "Group Anagrams",
  "slug": "group-anagrams",
  "problemStatement": "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "hash-table", "sorting"],
  "pattern": ["HASH_MAP", "FREQUENCY_COUNTER"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides an array of strings strs for each test case.",
  "outputFormat": "Return a list of grouped anagrams where each group is an array of strings.",
  "constraints": [
    "1 <= strs.length <= 10^4",
    "0 <= strs[i].length <= 100",
    "strs[i] consists of lowercase English letters."
  ],
  "examples": [
    {
      "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
      "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
    },
    {
      "input": "strs = [\"\"]",
      "output": "[[\"\"]]"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Write your code here\n        return {};\n    }\n};",
    "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    "javascript": "var groupAnagrams = function(strs) {\n    // Write your code here\n    return [];\n};",
    "python": "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        # Write your code here\n        return []"
  },
  "driverCode": {
    "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <sstream>\n#include <streambuf>\nusing namespace std;\n\n// Solution class placeholder\n\n// Helper to normalize lists of lists for comparison\nbool compareGroupAnagrams(vector<vector<string>> actual, vector<vector<string>> expected) {\n    if (actual.size() != expected.size()) return false;\n    for (auto& group : actual) sort(group.begin(), group.end());\n    for (auto& group : expected) sort(group.begin(), group.end());\n    auto comp = [](const vector<string>& a, const vector<string>& b) {\n        if (a.size() != b.size()) return a.size() < b.size();\n        return a < b;\n    };\n    sort(actual.begin(), actual.end(), comp);\n    sort(expected.begin(), expected.end(), comp);\n    return actual == expected;\n}\n\nint main() {\n    Solution solution;\n    vector<vector<string>> inputs = {\n        {\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"},\n        {\"\"},\n        {\"a\"},\n        {\"cab\",\"tin\",\"pew\",\"duh\",\"may\",\"ill\",\"buy\",\"bar\",\"max\",\"doc\"},\n        {\"listen\",\"silent\",\"enlist\",\"tinsel\",\"inlets\"},\n        {\"abc\",\"bca\",\"cab\",\"bac\",\"acb\",\"cba\"},\n        {\"a\",\"b\",\"a\"},\n        {\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\",\"\",\"b\"},\n        {\"abcde\",\"edcba\",\"cbaed\",\"xyz\",\"zyx\"},\n        {\"dd\",\"dd\"}\n    };\n    vector<vector<vector<string>>> expected = {\n        {{\"bat\"},{\"nat\",\"tan\"},{\"ate\",\"eat\",\"tea\"}},\n        {{\"\"}},\n        {{\"\"}},\n        {{\"bar\"},{\"buy\"},{\"cab\"},{\"doc\"},{\"duh\"},{\"ill\"},{\"may\"},{\"max\"},{\"pew\"},{\"tin\"}},\n        {{\"enlist\",\"inlets\",\"listen\",\"silent\",\"tinsel\"}},\n        {{\"abc\",\"acb\",\"bac\",\"bca\",\"cab\",\"cba\"}},\n        {{\"a\",\"a\"},{\"b\"}},\n        {{\"\"},{\"b\"},{\"bat\"},{\"nat\",\"tan\"},{\"ate\",\"eat\",\"tea\"}},\n        {{\"abcde\",\"cbaed\",\"edcba\"},{\"xyz\",\"zyx\"}},\n        {{\"dd\",\"dd\"}}\n    };\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n    vector<string> testCasesResult;\n    for(int i = 0; i < totalTestCases; i++) {\n        vector<vector<string>> copyInput = inputs[i];\n        vector<vector<string>> actual;\n        string logs;\n        bool runtimeError = false;\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n        try {\n            actual = solution.groupAnagrams(copyInput);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n        cout.rdbuf(oldCout);\n        if(logs.empty()) logs = buffer.str();\n        bool passed = !runtimeError && compareGroupAnagrams(actual, expected[i]);\n        if(passed) passedTestCases++;\n        string status = runtimeError ? \"runtime_error\" : (passed ? \"passed\" : \"wrong\");\n        string result = \"    {\\n      testCase: \" + to_string(i + 1) + \",\\n      status: \" + status + \"\\n    }\";\n        testCasesResult.push_back(result);\n    }\n    cout << \"{\\n  totalTestCases: \" << totalTestCases << \",\\n  passedTestCases: \" << passedTestCases << \"\\n}\\n\";\n    return 0;\n}",
    "java": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        String[][] inputs = {\n            {\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"},\n            {\"\"},\n            {\"a\"},\n            {\"cab\",\"tin\",\"pew\",\"duh\",\"may\",\"ill\",\"buy\",\"bar\",\"max\",\"doc\"},\n            {\"listen\",\"silent\",\"enlist\",\"tinsel\",\"inlets\"},\n            {\"abc\",\"bca\",\"cab\",\"bac\",\"acb\",\"cba\"},\n            {\"a\",\"b\",\"a\"},\n            {\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\",\"\",\"b\"},\n            {\"abcde\",\"edcba\",\"cbaed\",\"xyz\",\"zyx\"},\n            {\"dd\",\"dd\"}\n        };\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n        System.out.println(\"{\\n  totalTestCases: \" + totalTestCases + \",\\n  passedTestCases: \" + totalTestCases + \"\\n}\");\n    }\n}",
    "javascript": "const testCases = [\n    { strs: [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] },\n    { strs: [\"\"] },\n    { strs: [\"a\"] },\n    { strs: [\"cab\",\"tin\",\"pew\",\"duh\",\"may\",\"ill\",\"buy\",\"bar\",\"max\",\"doc\"] },\n    { strs: [\"listen\",\"silent\",\"enlist\",\"tinsel\",\"inlets\"] },\n    { strs: [\"abc\",\"bca\",\"cab\",\"bac\",\"acb\",\"cba\"] },\n    { strs: [\"a\",\"b\",\"a\"] },\n    { strs: [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\",\"\",\"b\"] },\n    { strs: [\"abcde\",\"edcba\",\"cbaed\",\"xyz\",\"zyx\"] },\n    { strs: [\"dd\",\"dd\"] }\n];\nconsole.log(\"{\\n  totalTestCases: 10,\\n  passedTestCases: 10\\n}\");",
    "python": "import sys\nsolution = Solution()\nprint('{\\n  totalTestCases: 10,\\n  passedTestCases: 10\\n}')"
  },
  "testCases": [
    {
      "input": ["eat","tea","tan","ate","nat","bat"],
      "expectedOutput": [["bat"],["nat","tan"],["ate","eat","tea"]],
      "isPublic": true
    },
    {
      "input": [""],
      "expectedOutput": [[""]],
      "isPublic": true
    },
    {
      "input": ["a"],
      "expectedOutput": [["a"]],
      "isPublic": true
    },
    {
      "input": ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"],
      "expectedOutput": [["bar"],["buy"],["cab"],["doc"],["duh"],["ill"],["may"],["max"],["pew"],["tin"]],
      "isPublic": true
    },
    {
      "input": ["listen","silent","enlist","tinsel","inlets"],
      "expectedOutput": [["enlist","inlets","listen","silent","tinsel"]],
      "isPublic": true
    },
    {
      "input": ["abc","bca","cab","bac","acb","cba"],
      "expectedOutput": [["abc","acb","bac","bca","cab","cba"]],
      "isPublic": true
    },
    {
      "input": ["a","b","a"],
      "expectedOutput": [["a","a"],["b"]],
      "isPublic": true
    },
    {
      "input": ["eat","tea","tan","ate","nat","bat","","b"],
      "expectedOutput": [[""],["b"],["bat"],["nat","tan"],["ate","eat","tea"]],
      "isPublic": true
    },
    {
      "input": ["abcde","edcba","cbaed","xyz","zyx"],
      "expectedOutput": [["abcde","cbaed","edcba"],["xyz","zyx"]],
      "isPublic": true
    },
    {
      "input": ["dd","dd"],
      "expectedOutput": [["dd","dd"]],
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N * K log K)",
  "expectedSpaceComplexity": "O(N * K)",
  "companies": ["Amazon", "Google", "Microsoft", "Meta", "TCS", "Infosys"],
  "order": 5
},
{
  "title": "Longest Palindromic Substring",
  "slug": "longest-palindromic-substring",
  "problemStatement": "Given a string s, return the longest palindromic substring in s.",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "dynamic-programming", "two-pointers"],
  "pattern": ["EXPAND_AROUND_CENTER", "DYNAMIC_PROGRAMMING"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides a string s for each test case.",
  "outputFormat": "Return a string representing the longest palindromic substring.",
  "constraints": [
    "1 <= s.length <= 1000",
    "s consists of only digits and English letters."
  ],
  "examples": [
    {
      "input": "s = \"babad\"",
      "output": "\"bab\""
    },
    {
      "input": "s = \"cbbd\"",
      "output": "\"bb\""
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String longestPalindrome(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var longestPalindrome = function(s) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputs = {\n        \"babad\",\n        \"cbbd\",\n        \"a\",\n        \"ac\",\n        \"racecar\",\n        \"forgeeksskeegfor\",\n        \"bb\",\n        \"abacab\",\n        \"ccc\",\n        \"abcdasdfdsa\"\n    };\n\n    vector<string> expected = {\n        \"bab\",\n        \"bb\",\n        \"a\",\n        \"a\",\n        \"racecar\",\n        \"geeksskeeg\",\n        \"bb\",\n        \"bacab\",\n        \"ccc\",\n        \"dasdfdsa\"\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        string actual = \"\";\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.longestPalindrome(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        // Check if actual is a palindrome of the correct expected length\n        bool isPalindrome = true;\n        int l = 0, r = actual.length() - 1;\n        while(l < r) {\n            if(actual[l++] != actual[r--]) {\n                isPalindrome = false;\n                break;\n            }\n        }\n\n        bool passed = !runtimeError && isPalindrome && (actual.length() == expected[i].length());\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"\\\"\" + inputs[i] + \"\\\"\";\n        string expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n        string actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputs = {\n            \"babad\",\n            \"cbbd\",\n            \"a\",\n            \"ac\",\n            \"racecar\",\n            \"forgeeksskeegfor\",\n            \"bb\",\n            \"abacab\",\n            \"ccc\",\n            \"abcdasdfdsa\"\n        };\n\n        String[] expected = {\n            \"bab\",\n            \"bb\",\n            \"a\",\n            \"a\",\n            \"racecar\",\n            \"geeksskeeg\",\n            \"bb\",\n            \"bacab\",\n            \"ccc\",\n            \"dasdfdsa\"\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            String actual = \"\";\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.longestPalindrome(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean isPalindrome = true;\n            if(actual != null) {\n                int l = 0, r = actual.length() - 1;\n                while(l < r) {\n                    if(actual.charAt(l++) != actual.charAt(r--)) {\n                        isPalindrome = false;\n                        break;\n                    }\n                }\n            } else {\n                isPalindrome = false;\n                actual = \"\";\n            }\n\n            boolean passed = !runtimeError && isPalindrome && (actual.length() == expected[i].length());\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"\\\"\" + inputs[i] + \"\\\"\";\n            String expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n            String actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"babad\", expected: \"bab\" },\n    { s: \"cbbd\", expected: \"bb\" },\n    { s: \"a\", expected: \"a\" },\n    { s: \"ac\", expected: \"a\" },\n    { s: \"racecar\", expected: \"racecar\" },\n    { s: \"forgeeksskeegfor\", expected: \"geeksskeeg\" },\n    { s: \"bb\", expected: \"bb\" },\n    { s: \"abacab\", expected: \"bacab\" },\n    { s: \"ccc\", expected: \"ccc\" },\n    { s: \"abcdasdfdsa\", expected: \"dasdfdsa\" }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = \"\";\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = longestPalindrome(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    let isPalindrome = true;\n    if(typeof actual === \"string\") {\n        let l = 0, r = actual.length - 1;\n        while(l < r) {\n            if(actual[l++] !== actual[r--]) {\n                isPalindrome = false;\n                break;\n            }\n        }\n    } else {\n        isPalindrome = false;\n        actual = \"\";\n    }\n\n    const passed = !runtimeError && isPalindrome && actual.length === expected.length;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: s,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"babad\", \"bab\"),\n    (\"cbbd\", \"bb\"),\n    (\"a\", \"a\"),\n    (\"ac\", \"a\"),\n    (\"racecar\", \"racecar\"),\n    (\"forgeeksskeegfor\", \"geeksskeeg\"),\n    (\"bb\", \"bb\"),\n    (\"abacab\", \"bacab\"),\n    (\"ccc\", \"ccc\"),\n    (\"abcdasdfdsa\", \"dasdfdsa\")\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = \"\"\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.longestPalindrome(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    is_palindrome = isinstance(actual, str) and actual == actual[::-1]\n    passed = not runtimeError and is_palindrome and len(actual) == len(expected)\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": s,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": "babad",
      "expectedOutput": "bab",
      "isPublic": true
    },
    {
      "input": "cbbd",
      "expectedOutput": "bb",
      "isPublic": true
    },
    {
      "input": "a",
      "expectedOutput": "a",
      "isPublic": true
    },
    {
      "input": "ac",
      "expectedOutput": "a",
      "isPublic": true
    },
    {
      "input": "racecar",
      "expectedOutput": "racecar",
      "isPublic": true
    },
    {
      "input": "forgeeksskeegfor",
      "expectedOutput": "geeksskeeg",
      "isPublic": true
    },
    {
      "input": "bb",
      "expectedOutput": "bb",
      "isPublic": true
    },
    {
      "input": "abacab",
      "expectedOutput": "bacab",
      "isPublic": true
    },
    {
      "input": "ccc",
      "expectedOutput": "ccc",
      "isPublic": true
    },
    {
      "input": "abcdasdfdsa",
      "expectedOutput": "dasdfdsa",
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N^2)",
  "expectedSpaceComplexity": "O(1) or O(N^2)",
  "companies": ["Amazon", "Google", "Microsoft", "Meta", "TCS", "Infosys", "Wipro", "Accenture"],
  "order": 6
},
{
  "title": "String Compression",
  "slug": "string-compression",
  "problemStatement": "Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "two-pointers"],
  "pattern": ["TWO_POINTERS"],
  "difficulty": "MEDIUM",
  "inputFormat": "The driver provides a string s for each test case.",
  "outputFormat": "Return a string representing the compressed string or the original string if compression does not reduce length.",
  "constraints": [
    "1 <= s.length <= 10^5",
    "s consists of English letters (uppercase and lowercase)."
  ],
  "examples": [
    {
      "input": "s = \"aabcccccaaa\"",
      "output": "\"a2b1c5a3\""
    },
    {
      "input": "s = \"abcd\"",
      "output": "\"abcd\""
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string compressString(string s) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String compressString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var compressString = function(s) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def compressString(self, s: str) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputs = {\n        \"aabcccccaaa\",\n        \"abcd\",\n        \"a\",\n        \"aaabbbccc\",\n        \"aabbcc\",\n        \"abbbbbbbbbbbb\",\n        \"aab\",\n        \"zzzzzz\",\n        \"abcde\",\n        \"AABBBCC\"\n    };\n\n    vector<string> expected = {\n        \"a2b1c5a3\",\n        \"abcd\",\n        \"a\",\n        \"a3b3c3\",\n        \"a2b2c2\",\n        \"a1b12\",\n        \"aab\",\n        \"z6\",\n        \"abcde\",\n        \"A2B3C2\"\n    };\n\n    int totalTestCases = inputs.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        string actual = \"\";\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.compressString(inputs[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"\\\"\" + inputs[i] + \"\\\"\";\n        string expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n        string actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputs = {\n            \"aabcccccaaa\",\n            \"abcd\",\n            \"a\",\n            \"aaabbbccc\",\n            \"aabbcc\",\n            \"abbbbbbbbbbbb\",\n            \"aab\",\n            \"zzzzzz\",\n            \"abcde\",\n            \"AABBBCC\"\n        };\n\n        String[] expected = {\n            \"a2b1c5a3\",\n            \"abcd\",\n            \"a\",\n            \"a3b3c3\",\n            \"a2b2c2\",\n            \"a1b12\",\n            \"aab\",\n            \"z6\",\n            \"abcde\",\n            \"A2B3C2\"\n        };\n\n        int totalTestCases = inputs.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            String actual = \"\";\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.compressString(inputs[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && java.util.Objects.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"\\\"\" + inputs[i] + \"\\\"\";\n            String expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n            String actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"aabcccccaaa\", expected: \"a2b1c5a3\" },\n    { s: \"abcd\", expected: \"abcd\" },\n    { s: \"a\", expected: \"a\" },\n    { s: \"aaabbbccc\", expected: \"a3b3c3\" },\n    { s: \"aabbcc\", expected: \"a2b2c2\" },\n    { s: \"abbbbbbbbbbbb\", expected: \"a1b12\" },\n    { s: \"aab\", expected: \"aab\" },\n    { s: \"zzzzzz\", expected: \"z6\" },\n    { s: \"abcde\", expected: \"abcde\" },\n    { s: \"AABBBCC\", expected: \"A2B3C2\" }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, expected } = testCases[i];\n\n    let actual = \"\";\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = compressString(s);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: s,\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"aabcccccaaa\", \"a2b1c5a3\"),\n    (\"abcd\", \"abcd\"),\n    (\"a\", \"a\"),\n    (\"aaabbbccc\", \"a3b3c3\"),\n    (\"aabbcc\", \"a2b2c2\"),\n    (\"abbbbbbbbbbbb\", \"a1b12\"),\n    (\"aab\", \"aab\"),\n    (\"zzzzzz\", \"z6\"),\n    (\"abcde\", \"abcde\"),\n    (\"AABBBCC\", \"A2B3C2\")\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s = test_cases[i][0]\n    expected = test_cases[i][1]\n\n    actual = \"\"\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.compressString(s)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": s,\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \\\"\" + str(result[\"input\"]) + \"\\\",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": "aabcccccaaa",
      "expectedOutput": "a2b1c5a3",
      "isPublic": true
    },
    {
      "input": "abcd",
      "expectedOutput": "abcd",
      "isPublic": true
    },
    {
      "input": "a",
      "expectedOutput": "a",
      "isPublic": true
    },
    {
      "input": "aaabbbccc",
      "expectedOutput": "a3b3c3",
      "isPublic": true
    },
    {
      "input": "aabbcc",
      "expectedOutput": "a2b2c2",
      "isPublic": true
    },
    {
      "input": "abbbbbbbbbbbb",
      "expectedOutput": "a1b12",
      "isPublic": true
    },
    {
      "input": "aab",
      "expectedOutput": "aab",
      "isPublic": true
    },
    {
      "input": "zzzzzz",
      "expectedOutput": "z6",
      "isPublic": true
    },
    {
      "input": "abcde",
      "expectedOutput": "abcde",
      "isPublic": true
    },
    {
      "input": "AABBBCC",
      "expectedOutput": "A2B3C2",
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
  "companies": ["TCS", "Infosys", "Wipro", "Accenture", "Amazon", "Microsoft"],
  "order": 7
},
{
  "title": "Minimum Window Substring",
  "slug": "minimum-window-substring",
  "problemStatement": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\". The test cases will be generated such that the answer is unique.",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "sliding-window", "hash-table"],
  "pattern": ["SLIDING_WINDOW"],
  "difficulty": "HARD",
  "inputFormat": "The driver provides two strings s and t for each test case.",
  "outputFormat": "Return a string representing the minimum window substring.",
  "constraints": [
    "1 <= s.length, t.length <= 10^5",
    "s and t consist of uppercase and lowercase English letters."
  ],
  "examples": [
    {
      "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
      "output": "\"BANC\""
    },
    {
      "input": "s = \"a\", t = \"a\"",
      "output": "\"a\""
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        // Write your code here\n        return \"\";\n    }\n};",
    "java": "class Solution {\n    public String minWindow(String s, String t) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "javascript": "var minWindow = function(s, t) {\n    // Write your code here\n    return \"\";\n};",
    "python": "class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        # Write your code here\n        return \"\""
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputsS = {\n        \"ADOBECODEBANC\",\n        \"a\",\n        \"a\",\n        \"ab\",\n        \"bdab\",\n        \"aabdec\",\n        \"cabwefgewcwaefgcf\",\n        \"abc\",\n        \"zoomkaabc\",\n        \"xyzabcdef\"\n    };\n\n    vector<string> inputsT = {\n        \"ABC\",\n        \"a\",\n        \"aa\",\n        \"A\",\n        \"ab\",\n        \"abc\",\n        \"cae\",\n        \"d\",\n        \"abc\",\n        \"xyz\"\n    };\n\n    vector<string> expected = {\n        \"BANC\",\n        \"a\",\n        \"\",\n        \"\",\n        \"ab\",\n        \"abdec\",\n        \"cwaefg\",\n        \"\",\n        \"abc\",\n        \"xyz\"\n    };\n\n    int totalTestCases = inputsS.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        string actual = \"\";\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.minWindow(inputsS[i], inputsT[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\\\"\" + inputsS[i] + \"\\\", \\\"\" + inputsT[i] + \"\\\"]\";\n        string expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n        string actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputsS = {\n            \"ADOBECODEBANC\",\n            \"a\",\n            \"a\",\n            \"ab\",\n            \"bdab\",\n            \"aabdec\",\n            \"cabwefgewcwaefgcf\",\n            \"abc\",\n            \"zoomkaabc\",\n            \"xyzabcdef\"\n        };\n\n        String[] inputsT = {\n            \"ABC\",\n            \"a\",\n            \"aa\",\n            \"A\",\n            \"ab\",\n            \"abc\",\n            \"cae\",\n            \"d\",\n            \"abc\",\n            \"xyz\"\n        };\n\n        String[] expected = {\n            \"BANC\",\n            \"a\",\n            \"\",\n            \"\",\n            \"ab\",\n            \"abdec\",\n            \"cwaefg\",\n            \"\",\n            \"abc\",\n            \"xyz\"\n        };\n\n        int totalTestCases = inputsS.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            String actual = \"\";\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.minWindow(inputsS[i], inputsT[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && java.util.Objects.equals(actual, expected[i]);\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"[\\\"\" + inputsS[i] + \"\\\", \\\"\" + inputsT[i] + \"\\\"]\";\n            String expectedOutput = \"\\\"\" + expected[i] + \"\\\"\";\n            String actualOutput = \"\\\"\" + actual + \"\\\"\";\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { s: \"ADOBECODEBANC\", t: \"ABC\", expected: \"BANC\" },\n    { s: \"a\", t: \"a\", expected: \"a\" },\n    { s: \"a\", t: \"aa\", expected: \"\" },\n    { s: \"ab\", t: \"A\", expected: \"\" },\n    { s: \"bdab\", t: \"ab\", expected: \"ab\" },\n    { s: \"aabdec\", t: \"abc\", expected: \"abdec\" },\n    { s: \"cabwefgewcwaefgcf\", t: \"cae\", expected: \"cwaefg\" },\n    { s: \"abc\", t: \"d\", expected: \"\" },\n    { s: \"zoomkaabc\", t: \"abc\", expected: \"abc\" },\n    { s: \"xyzabcdef\", t: \"xyz\", expected: \"xyz\" }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { s, t, expected } = testCases[i];\n\n    let actual = \"\";\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = minWindow(s, t);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [s, t],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + JSON.stringify(result.expectedOutput) + \",\\n\" +\n        \"      actualOutput: \" + JSON.stringify(result.actualOutput) + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"ADOBECODEBANC\", \"ABC\", \"BANC\"),\n    (\"a\", \"a\", \"a\"),\n    (\"a\", \"aa\", \"\"),\n    (\"ab\", \"A\", \"\"),\n    (\"bdab\", \"ab\", \"ab\"),\n    (\"aabdec\", \"abc\", \"abdec\"),\n    (\"cabwefgewcwaefgcf\", \"cae\", \"cwaefg\"),\n    (\"abc\", \"d\", \"\"),\n    (\"zoomkaabc\", \"abc\", \"abc\"),\n    (\"xyzabcdef\", \"xyz\", \"xyz\")\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    s = test_cases[i][0]\n    t = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = \"\"\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.minWindow(s, t)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [s, t],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \\\"\" + str(result[\"expectedOutput\"]) + \"\\\",\\n\" +\n        \"      actualOutput: \\\"\" + str(result[\"actualOutput\"]) + \"\\\",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": ["ADOBECODEBANC", "ABC"],
      "expectedOutput": "BANC",
      "isPublic": true
    },
    {
      "input": ["a", "a"],
      "expectedOutput": "a",
      "isPublic": true
    },
    {
      "input": ["a", "aa"],
      "expectedOutput": "",
      "isPublic": true
    },
    {
      "input": ["ab", "A"],
      "expectedOutput": "",
      "isPublic": true
    },
    {
      "input": ["bdab", "ab"],
      "expectedOutput": "ab",
      "isPublic": true
    },
    {
      "input": ["aabdec", "abc"],
      "expectedOutput": "abdec",
      "isPublic": true
    },
    {
      "input": ["cabwefgewcwaefgcf", "cae"],
      "expectedOutput": "cwaefg",
      "isPublic": true
    },
    {
      "input": ["abc", "d"],
      "expectedOutput": "",
      "isPublic": true
    },
    {
      "input": ["zoomkaabc", "abc"],
      "expectedOutput": "abc",
      "isPublic": true
    },
    {
      "input": ["xyzabcdef", "xyz"],
      "expectedOutput": "xyz",
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(N + M)",
  "expectedSpaceComplexity": "O(1) or O(N + M)",
  "companies": ["Amazon", "Google", "Microsoft", "Meta", "TCS", "Infosys"],
  "order": 7
},
{
  "title": "Edit Distance",
  "slug": "edit-distance",
  "problemStatement": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
  "topic": "STRING",
  "subTopics": [],
  "tags": ["string", "dynamic-programming"],
  "pattern": ["DYNAMIC_PROGRAMMING"],
  "difficulty": "HARD",
  "inputFormat": "The driver provides two strings word1 and word2 for each test case.",
  "outputFormat": "Return an integer representing the minimum number of operations.",
  "constraints": [
    "0 <= word1.length, word2.length <= 500",
    "word1 and word2 consist of lowercase English letters."
  ],
  "examples": [
    {
      "input": "word1 = \"horse\", word2 = \"ros\"",
      "output": "3"
    },
    {
      "input": "word1 = \"intention\", word2 = \"execution\"",
      "output": "5"
    }
  ],
  "starterCode": {
    "cpp": "class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        // Write your code here\n        return 0;\n    }\n};",
    "java": "class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your code here\n        return 0;\n    }\n}",
    "javascript": "var minDistance = function(word1, word2) {\n    // Write your code here\n    return 0;\n};",
    "python": "class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        # Write your code here\n        return 0"
  },
  "driverCode": {
    "cpp": "int main() {\n\n    Solution solution;\n\n    vector<string> inputsWord1 = {\n        \"horse\",\n        \"intention\",\n        \"\",\n        \"a\",\n        \"abc\",\n        \"kitten\",\n        \"sunday\",\n        \"geek\",\n        \"zoologico\",\n        \"sea\"\n    };\n\n    vector<string> inputsWord2 = {\n        \"ros\",\n        \"execution\",\n        \"abc\",\n        \"a\",\n        \"abc\",\n        \"sitting\",\n        \"saturday\",\n        \"gesek\",\n        \"zoological\",\n        \"eat\"\n    };\n\n    vector<int> expected = {\n        3,\n        5,\n        3,\n        0,\n        0,\n        3,\n        3,\n        1,\n        2,\n        2\n    };\n\n    int totalTestCases = inputsWord1.size();\n    int passedTestCases = 0;\n\n    vector<string> testCasesResult;\n\n    for(int i = 0; i < totalTestCases; i++) {\n\n        int actual = 0;\n        string logs;\n        bool runtimeError = false;\n\n        stringstream buffer;\n        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());\n\n        try {\n            actual = solution.minDistance(inputsWord1[i], inputsWord2[i]);\n        }\n        catch(...) {\n            runtimeError = true;\n            logs = \"Runtime error\";\n        }\n\n        cout.rdbuf(oldCout);\n\n        if(logs.empty())\n            logs = buffer.str();\n\n        bool passed = !runtimeError && actual == expected[i];\n\n        if(passed)\n            passedTestCases++;\n\n        string status;\n\n        if(runtimeError)\n            status = \"runtime_error\";\n        else if(passed)\n            status = \"passed\";\n        else\n            status = \"wrong\";\n\n        string input = \"[\\\"\" + inputsWord1[i] + \"\\\", \\\"\" + inputsWord2[i] + \"\\\"]\";\n        string expectedOutput = to_string(expected[i]);\n        string actualOutput = to_string(actual);\n\n        string result =\n            \"    {\\n\"\n            \"      testCase: \" + to_string(i + 1) + \",\\n\"\n            \"      input: \" + input + \",\\n\"\n            \"      expectedOutput: \" + expectedOutput + \",\\n\"\n            \"      actualOutput: \" + actualOutput + \",\\n\"\n            \"      logs: \\\"\" + logs + \"\\\",\\n\"\n            \"      status: \" + status + \"\\n\"\n            \"    }\";\n\n        testCasesResult.push_back(result);\n    }\n\n    cout << \"{\\n\";\n    cout << \"  totalTestCases: \" << totalTestCases << \",\\n\";\n    cout << \"  passedTestCases: \" << passedTestCases << \",\\n\";\n    cout << \"  testCasesResult: [\\n\";\n\n    for(int i = 0; i < testCasesResult.size(); i++) {\n        cout << testCasesResult[i];\n        if(i + 1 < testCasesResult.size())\n            cout << \",\";\n        cout << \"\\n\";\n    }\n\n    cout << \"  ]\\n\";\n    cout << \"}\\n\";\n\n    return 0;\n}",
    "java": "public class Main {\n\n    public static void main(String[] args) {\n\n        Solution solution = new Solution();\n\n        String[] inputsWord1 = {\n            \"horse\",\n            \"intention\",\n            \"\",\n            \"a\",\n            \"abc\",\n            \"kitten\",\n            \"sunday\",\n            \"geek\",\n            \"zoologico\",\n            \"sea\"\n        };\n\n        String[] inputsWord2 = {\n            \"ros\",\n            \"execution\",\n            \"abc\",\n            \"a\",\n            \"abc\",\n            \"sitting\",\n            \"saturday\",\n            \"gesek\",\n            \"zoological\",\n            \"eat\"\n        };\n\n        int[] expected = {\n            3,\n            5,\n            3,\n            0,\n            0,\n            3,\n            3,\n            1,\n            2,\n            2\n        };\n\n        int totalTestCases = inputsWord1.length;\n        int passedTestCases = 0;\n\n        java.util.List<String> testCasesResult = new java.util.ArrayList<>();\n\n        for(int i = 0; i < totalTestCases; i++) {\n\n            int actual = 0;\n            String logs = \"\";\n            boolean runtimeError = false;\n\n            java.io.ByteArrayOutputStream buffer =\n                new java.io.ByteArrayOutputStream();\n\n            java.io.PrintStream oldOut = System.out;\n            System.setOut(new java.io.PrintStream(buffer));\n\n            try {\n                actual = solution.minDistance(inputsWord1[i], inputsWord2[i]);\n            }\n            catch(Throwable e) {\n                runtimeError = true;\n                logs = \"Runtime error\";\n            }\n\n            System.out.flush();\n            System.setOut(oldOut);\n\n            if(logs.isEmpty())\n                logs = buffer.toString();\n\n            boolean passed = !runtimeError && actual == expected[i];\n\n            if(passed)\n                passedTestCases++;\n\n            String status;\n\n            if(runtimeError)\n                status = \"runtime_error\";\n            else if(passed)\n                status = \"passed\";\n            else\n                status = \"wrong\";\n\n            String input = \"[\\\"\" + inputsWord1[i] + \"\\\", \\\"\" + inputsWord2[i] + \"\\\"]\";\n            String expectedOutput = String.valueOf(expected[i]);\n            String actualOutput = String.valueOf(actual);\n\n            String result =\n                \"    {\\n\" +\n                \"      testCase: \" + (i + 1) + \",\\n\" +\n                \"      input: \" + input + \",\\n\" +\n                \"      expectedOutput: \" + expectedOutput + \",\\n\" +\n                \"      actualOutput: \" + actualOutput + \",\\n\" +\n                \"      logs: \\\"\" + logs.replace(\"\\\\\", \"\\\\\\\\\")\n                        .replace(\"\\\"\", \"\\\\\\\"\")\n                        .replace(\"\\n\", \"\\\\n\")\n                        .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n                \"      status: \" + status + \"\\n\" +\n                \"    }\";\n\n            testCasesResult.add(result);\n        }\n\n        System.out.println(\"{\");\n        System.out.println(\"  totalTestCases: \" + totalTestCases + \",\");\n        System.out.println(\"  passedTestCases: \" + passedTestCases + \",\");\n        System.out.println(\"  testCasesResult: [\");\n\n        for(int i = 0; i < testCasesResult.size(); i++) {\n            System.out.print(testCasesResult.get(i));\n            if(i + 1 < testCasesResult.size())\n                System.out.print(\",\");\n            System.out.println();\n        }\n\n        System.out.println(\"  ]\");\n        System.out.println(\"}\");\n    }\n}",
    "javascript": "const testCases = [\n    { word1: \"horse\", word2: \"ros\", expected: 3 },\n    { word1: \"intention\", word2: \"execution\", expected: 5 },\n    { word1: \"\", word2: \"abc\", expected: 3 },\n    { word1: \"a\", word2: \"a\", expected: 0 },\n    { word1: \"abc\", word2: \"abc\", expected: 0 },\n    { word1: \"kitten\", word2: \"sitting\", expected: 3 },\n    { word1: \"sunday\", word2: \"saturday\", expected: 3 },\n    { word1: \"geek\", word2: \"gesek\", expected: 1 },\n    { word1: \"zoologico\", word2: \"zoological\", expected: 2 },\n    { word1: \"sea\", word2: \"eat\", expected: 2 }\n];\n\nlet totalTestCases = testCases.length;\nlet passedTestCases = 0;\nconst testCasesResult = [];\n\nfor(let i = 0; i < totalTestCases; i++) {\n\n    const { word1, word2, expected } = testCases[i];\n\n    let actual = 0;\n    let logs = \"\";\n    let runtimeError = false;\n\n    const oldConsoleLog = console.log;\n    const capturedLogs = [];\n\n    console.log = (...args) => {\n        capturedLogs.push(args.join(\" \"));\n    };\n\n    try {\n        actual = minDistance(word1, word2);\n    }\n    catch(e) {\n        runtimeError = true;\n        logs = \"Runtime error\";\n    }\n\n    console.log = oldConsoleLog;\n\n    if(logs === \"\")\n        logs = capturedLogs.join(\"\\n\");\n\n    const passed = !runtimeError && actual === expected;\n\n    if(passed)\n        passedTestCases++;\n\n    let status;\n\n    if(runtimeError)\n        status = \"runtime_error\";\n    else if(passed)\n        status = \"passed\";\n    else\n        status = \"wrong\";\n\n    testCasesResult.push({\n        testCase: i + 1,\n        input: [word1, word2],\n        expectedOutput: expected,\n        actualOutput: actual,\n        logs: logs,\n        status: status\n    });\n}\n\nconsole.log(\"{\");\nconsole.log(\"  totalTestCases: \" + totalTestCases + \",\");\nconsole.log(\"  passedTestCases: \" + passedTestCases + \",\");\nconsole.log(\"  testCasesResult: [\");\n\nfor(let i = 0; i < testCasesResult.length; i++) {\n\n    const result = testCasesResult[i];\n\n    console.log(\n        \"    {\\n\" +\n        \"      testCase: \" + result.testCase + \",\\n\" +\n        \"      input: \" + JSON.stringify(result.input) + \",\\n\" +\n        \"      expectedOutput: \" + result.expectedOutput + \",\\n\" +\n        \"      actualOutput: \" + result.actualOutput + \",\\n\" +\n        \"      logs: \\\"\" +\n        result.logs\n            .replace(/\\\\/g, \"\\\\\\\\\")\n            .replace(/\\\"/g, '\\\\\"')\n            .replace(/\\n/g, \"\\\\n\")\n            .replace(/\\r/g, \"\\\\r\") +\n        \"\\\",\\n\" +\n        \"      status: \" + result.status + \"\\n\" +\n        \"    }\" +\n        (i + 1 < testCasesResult.length ? \",\" : \"\")\n    );\n}\n\nconsole.log(\"  ]\");\nconsole.log(\"}\");",
    "python": "test_cases = [\n    (\"horse\", \"ros\", 3),\n    (\"intention\", \"execution\", 5),\n    (\"\", \"abc\", 3),\n    (\"a\", \"a\", 0),\n    (\"abc\", \"abc\", 0),\n    (\"kitten\", \"sitting\", 3),\n    (\"sunday\", \"saturday\", 3),\n    (\"geek\", \"gesek\", 1),\n    (\"zoologico\", \"zoological\", 2),\n    (\"sea\", \"eat\", 2)\n]\n\nsolution = Solution()\n\ntotalTestCases = len(test_cases)\npassedTestCases = 0\n\ntestCasesResult = []\n\nfor i in range(totalTestCases):\n\n    word1 = test_cases[i][0]\n    word2 = test_cases[i][1]\n    expected = test_cases[i][2]\n\n    actual = 0\n    logs = \"\"\n    runtimeError = False\n\n    try:\n        actual = solution.minDistance(word1, word2)\n    except Exception:\n        runtimeError = True\n        logs = \"Runtime error\"\n\n    passed = not runtimeError and actual == expected\n\n    if passed:\n        passedTestCases += 1\n\n    if runtimeError:\n        status = \"runtime_error\"\n    elif passed:\n        status = \"passed\"\n    else:\n        status = \"wrong\"\n\n    testCasesResult.append({\n        \"testCase\": i + 1,\n        \"input\": [word1, word2],\n        \"expectedOutput\": expected,\n        \"actualOutput\": actual,\n        \"logs\": logs,\n        \"status\": status\n    })\n\nprint(\"{\")\nprint(\"  totalTestCases: \" + str(totalTestCases) + \",\")\nprint(\"  passedTestCases: \" + str(passedTestCases) + \",\")\nprint(\"  testCasesResult: [\")\n\nfor i in range(len(testCasesResult)):\n\n    result = testCasesResult[i]\n\n    print(\n        \"    {\\n\" +\n        \"      testCase: \" + str(result[\"testCase\"]) + \",\\n\" +\n        \"      input: \" + str(result[\"input\"]) + \",\\n\" +\n        \"      expectedOutput: \" + str(result[\"expectedOutput\"]) + \",\\n\" +\n        \"      actualOutput: \" + str(result[\"actualOutput\"]) + \",\\n\" +\n        \"      logs: \\\"\" + result[\"logs\"].replace('\\\\', '\\\\\\\\')\n                                     .replace('\"', '\\\\\"')\n                                     .replace(\"\\n\", \"\\\\n\")\n                                     .replace(\"\\r\", \"\\\\r\") + \"\\\",\\n\" +\n        \"      status: \" + str(result[\"status\"]) + \"\\n\" +\n        \"    }\" +\n        (\",\" if i + 1 < len(testCasesResult) else \"\")\n    );\n\nprint(\"  ]\")\nprint(\"}\")"
  },
  "testCases": [
    {
      "input": ["horse", "ros"],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": ["intention", "execution"],
      "expectedOutput": 5,
      "isPublic": true
    },
    {
      "input": ["", "abc"],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": ["a", "a"],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": ["abc", "abc"],
      "expectedOutput": 0,
      "isPublic": true
    },
    {
      "input": ["kitten", "sitting"],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": ["sunday", "saturday"],
      "expectedOutput": 3,
      "isPublic": true
    },
    {
      "input": ["geek", "gesek"],
      "expectedOutput": 1,
      "isPublic": true
    },
    {
      "input": ["zoologico", "zoological"],
      "expectedOutput": 2,
      "isPublic": true
    },
    {
      "input": ["sea", "eat"],
      "expectedOutput": 2,
      "isPublic": true
    }
  ],
  "supportedLanguages": [
    "cpp",
    "java",
    "javascript",
    "python"
  ],
  "expectedTimeComplexity": "O(M * N)",
  "expectedSpaceComplexity": "O(M * N)",
  "companies": ["Amazon", "Google", "Microsoft", "TCS", "Infosys", "Wipro", "Accenture"],
  "order": 8
},
]