export const problemBoilerplate = {
  Java: `import java.util.*;

class Solution {
    public static void solve() {
        // code here
    }
}`,
  "C++": `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void solve() {
        // code here
    }
};`,
  Python: `def solve():
    # code here
    pass`,
  JavaScript: `function solve() {
  // code here
}`,
} as const;

export type EditorLanguage = keyof typeof problemBoilerplate;
