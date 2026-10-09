#include <bits/stdc++.h>
using namespace std;


class Solution {
public:
    vector<int> calculateTotalAndAverage(int a, int b, int c) {
        // Write your code here
        int total1=a+b+c;
        int avg=total/3;
        return {total1,avg};
    }
};
int main() {

    Solution solution;

    vector<vector<int>> inputs = {
        {10,20,30},
        {5,10,15},
        {1,2,3},
        {-10,20,30},
        {-5,-10,-15},
        {100,200,300},
        {0,0,0},
        {7,7,7},
        {-100,0,100},
        {999999999,999999999,999999999}
    };

    vector<vector<int>> expected = {
        {60,20},
        {30,10},
        {6,2},
        {40,13},
        {-30,-10},
        {600,200},
        {0,0},
        {21,7},
        {0,0},
        {2999999997,999999999}
    };

    int totalTestCases = inputs.size();
    int passedTestCases = 0;

    vector<string> testCasesResult;

    for(int i = 0; i < totalTestCases; i++) {

        vector<int> actual;
        string logs;
        bool runtimeError = false;

        stringstream buffer;
        streambuf* oldCout = cout.rdbuf(buffer.rdbuf());

        try {
            actual = solution.calculateTotalAndAverage(
                inputs[i][0],
                inputs[i][1],
                inputs[i][2]
            );
        }
        catch(...) {
            runtimeError = true;
            logs = "Runtime error";
        }

        cout.rdbuf(oldCout);

        if(logs.empty())
            logs = buffer.str();

        bool passed = !runtimeError && actual == expected[i];

        if(passed)
            passedTestCases++;

        string status;

        if(runtimeError)
            status = "runtime_error";
        else if(passed)
            status = "passed";
        else
            status = "wrong";

        string input = "[";

        for(int j = 0; j < inputs[i].size(); j++) {
            input += to_string(inputs[i][j]);

            if(j + 1 < inputs[i].size())
                input += ", ";
        }

        input += "]";

        string expectedOutput = "[";

        for(int j = 0; j < expected[i].size(); j++) {
            expectedOutput += to_string(expected[i][j]);

            if(j + 1 < expected[i].size())
                expectedOutput += ", ";
        }

        expectedOutput += "]";

        string actualOutput = "[";

        for(int j = 0; j < actual.size(); j++) {
            actualOutput += to_string(actual[j]);

            if(j + 1 < actual.size())
                actualOutput += ", ";
        }

        actualOutput += "]";

        string result =
            "    {\n"
            "      testCase: " + to_string(i + 1) + ",\n"
            "      input: " + input + ",\n"
            "      expectedOutput: " + expectedOutput + ",\n"
            "      actualOutput: " + actualOutput + ",\n"
            "      logs: \"" + logs + "\",\n"
            "      status: " + status + "\n"
            "    }";

        testCasesResult.push_back(result);
    }

    cout << "{\n";
    cout << "  totalTestCases: " << totalTestCases << ",\n";
    cout << "  passedTestCases: " << passedTestCases << ",\n";
    cout << "  testCasesResult: [\n";

    for(int i = 0; i < testCasesResult.size(); i++) {

        cout << testCasesResult[i];

        if(i + 1 < testCasesResult.size())
            cout << ",";

        cout << "\n";
    }

    cout << "  ]\n";
    cout << "}\n";

    return 0;
}