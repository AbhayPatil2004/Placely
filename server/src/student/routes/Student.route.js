import Router from "express";

import {
    UpdateStudentInfo,
    AddCodingProfile,
    UpdateCodingProfile,
    DeleteCodingProfile,
    GetCodingProfiles,

    AddProject,
    UpdateProject,
    DeleteProject,
    GetProjects,

    AddCertificate,
    UpdateCertificate,
    DeleteCertificate,
    GetCertificates,

    AddAchievement,
    UpdateAchievement,
    DeleteAchievement,
    GetAchievements,

    AddHackathon,
    UpdateHackathon,
    DeleteHackathon,
    GetHackathons,

    AddInternship,
    UpdateInternship,
    DeleteInternship,
    GetInternships
} from "../controllers/student.controller.js";

import VerifyStudent from "../../middlewares/student.middleware.js";

const router = Router();


// ============================================================
// GENERAL STUDENT PROFILE
// ============================================================

router.put(
    "/update",
    VerifyStudent,
    UpdateStudentInfo
);


// ============================================================
// CODING PROFILES
// ============================================================

router.get(
    "/coding-profiles",
    VerifyStudent,
    GetCodingProfiles
);

router.post(
    "/coding-profiles",
    VerifyStudent,
    AddCodingProfile
);

router.put(
    "/coding-profiles/:platform",
    VerifyStudent,
    UpdateCodingProfile
);

router.delete(
    "/coding-profiles/:platform",
    VerifyStudent,
    DeleteCodingProfile
);


// ============================================================
// PROJECTS
// ============================================================

router.get(
    "/projects",
    VerifyStudent,
    GetProjects
);

router.post(
    "/projects",
    VerifyStudent,
    AddProject
);

router.put(
    "/projects/:projectId",
    VerifyStudent,
    UpdateProject
);

router.delete(
    "/projects/:projectId",
    VerifyStudent,
    DeleteProject
);


// ============================================================
// CERTIFICATES
// ============================================================

router.get(
    "/certificates",
    VerifyStudent,
    GetCertificates
);

router.post(
    "/certificates",
    VerifyStudent,
    AddCertificate
);

router.put(
    "/certificates/:certificateId",
    VerifyStudent,
    UpdateCertificate
);

router.delete(
    "/certificates/:certificateId",
    VerifyStudent,
    DeleteCertificate
);


// ============================================================
// ACHIEVEMENTS
// ============================================================

router.get(
    "/achievements",
    VerifyStudent,
    GetAchievements
);

router.post(
    "/achievements",
    VerifyStudent,
    AddAchievement
);

router.put(
    "/achievements/:achievementId",
    VerifyStudent,
    UpdateAchievement
);

router.delete(
    "/achievements/:achievementId",
    VerifyStudent,
    DeleteAchievement
);


// ============================================================
// HACKATHONS
// ============================================================

router.get(
    "/hackathons",
    VerifyStudent,
    GetHackathons
);

router.post(
    "/hackathons",
    VerifyStudent,
    AddHackathon
);

router.put(
    "/hackathons/:hackathonId",
    VerifyStudent,
    UpdateHackathon
);

router.delete(
    "/hackathons/:hackathonId",
    VerifyStudent,
    DeleteHackathon
);


// ============================================================
// INTERNSHIPS
// ============================================================

router.get(
    "/internships",
    VerifyStudent,
    GetInternships
);

router.post(
    "/internships",
    VerifyStudent,
    AddInternship
);

router.put(
    "/internships/:internshipId",
    VerifyStudent,
    UpdateInternship
);

router.delete(
    "/internships/:internshipId",
    VerifyStudent,
    DeleteInternship
);


export default router;