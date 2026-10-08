export const editorLanguages = ["Java", "C++", "Python", "JavaScript"] as const;

export type EditorLanguage = (typeof editorLanguages)[number];

export const monacoLanguageByEditorLanguage: Record<EditorLanguage, string> = {
  Java: "java",
  "C++": "cpp",
  Python: "python",
  JavaScript: "javascript",
};

export const problemBoilerplate: Record<EditorLanguage, string> = {
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
