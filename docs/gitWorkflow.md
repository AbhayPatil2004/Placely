# 🌿 Placely Git Workflow Guide

Welcome to the Placely project! Follow this workflow to avoid conflicts and keep the repository organized.

---

# Branch Structure

```
main
│
├── develop
│   ├── abhay
│   ├── ritik
│   ├── om
│   └── sanket
```

- **main** → Stable production-ready code.
- **develop** → Integration branch for all completed features.
- **Personal Branches** → Each member works only on their own branch.

---

# Rule 1

❌ Never push directly to `main`.

❌ Never push directly to another member's branch.

✅ Always work on your own branch.

---

# Clone Repository

```bash
git clone <repository-url>
cd Placely
```

---

# Check Current Branch

```bash
git branch
```

Current branch will have a `*`.

Example:

```bash
  main
* abhay
  develop
```

---

# View All Branches

```bash
git branch
```

Remote branches:

```bash
git branch -r
```

All branches:

```bash
git branch -a
```

---

# Switch Branch

Example:

```bash
git checkout abhay
```

or

```bash
git switch abhay
```

Examples:

```bash
git checkout develop
git checkout main
git checkout om
git checkout ritik
git checkout sanket
```

---

# Update Your Branch Before Working

Always start your work with:

```bash
git checkout develop
git pull origin develop

git checkout <your-branch>
git merge develop
```

Example:

```bash
git checkout abhay
git merge develop
```

This keeps your branch up to date.

---

# Make Changes

After completing your work:

```bash
git status
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Added Login Page"
```

Push:

```bash
git push origin <your-branch>
```

Example:

```bash
git push origin abhay
```

---

# Merge Into Develop

After testing your work:

```bash
git checkout develop
git pull origin develop
git merge <your-branch>
git push origin develop
```

Example:

```bash
git merge abhay
git push origin develop
```

Only merge if your feature is complete.

---

# Merge Develop Into Main

Only the Team Lead should do this.

```bash
git checkout main
git pull origin main
git merge develop
git push origin main
```

---

# Check Status

```bash
git status
```

---

# See Commit History

```bash
git log --oneline --graph --all
```

---

# Fetch Latest Changes

```bash
git fetch origin
```

---

# Pull Latest Changes

```bash
git pull origin develop
```

or

```bash
git pull origin main
```

---

# Push Changes

```bash
git push origin <your-branch>
```

---

# Resolve Merge Conflicts

If Git reports conflicts:

1. Open the conflicted file.
2. Remove conflict markers.
3. Keep the correct code.
4. Save the file.
5. Run:

```bash
git add .
git commit
```

---

# Daily Workflow

```
Start Work
     │
     ▼
Pull develop
     │
     ▼
Merge develop into your branch
     │
     ▼
Code
     │
     ▼
Commit
     │
     ▼
Push your branch
     │
     ▼
Merge into develop
     │
     ▼
Testing
     │
     ▼
Merge develop → main
```

---

# Important Rules

- ✅ Work only on your own branch.
- ✅ Commit frequently with meaningful messages.
- ✅ Pull the latest `develop` before starting work.
- ✅ Test your code before merging.
- ✅ Keep commits small and focused.
- ❌ Do not force push (`git push --force`) unless explicitly instructed.
- ❌ Do not commit `.env` files, API keys, passwords, or secrets.
- ❌ Do not work directly on `main`.

---

# Commit Message Examples

```
feat: add login page
feat: implement resume upload
fix: resolve navbar issue
fix: correct authentication bug
refactor: optimize API routes
style: improve dashboard UI
docs: update README
```

---

Happy Coding! 🚀