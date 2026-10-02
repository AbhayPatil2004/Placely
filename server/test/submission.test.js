
import "dotenv/config";
import mongoose from "mongoose";
// import Submission from "./DSA/models/submission.model.js";
import Submission from "../src/DSA/models/submission.model.js";

const ViewAllSubmissions = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

    const submissions = await Submission.find()
      .sort({ createdAt: -1 })
      .lean();

    console.log("\n========== ALL SUBMISSIONS ==========");
    console.log("Total submissions:", submissions.length);

    for (const [index, submission] of submissions.entries()) {
      console.log(`\n========== SUBMISSION ${index + 1} ==========`);
      console.log("Submission ID:", submission._id);
      console.log("Student ID:", submission.studentId);
      console.log("Problem ID:", submission.problemId);
      console.log("Job ID:", submission.jobId ?? "Not stored");
      console.log("Language:", submission.language);
      console.log("Status:", submission.status);
      console.log(
        "Test Cases:",
        `${submission.passedTestCases ?? 0}/${submission.totalTestCases ?? 0}`
      );
      console.log("Execution Time:", submission.executionTime);
      console.log("Memory Used:", submission.memoryUsed);
      console.log("Exit Code:", submission.exitCode);
      console.log("Error Message:", submission.errorMessage);
      console.log("Failed Test Cases:", submission.failedTestCases);
      console.log("Created At:", submission.createdAt);
      console.log("Completed At:", submission.completedAt);
    }

    console.log("\n========== VERIFICATION COMPLETE ==========");
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
};

ViewAllSubmissions();

