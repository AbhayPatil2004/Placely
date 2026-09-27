import Student from "../models/student.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";
import { rmSync } from "node:fs";

const getStudentId = (req) => {
    return req.user.userId;
};


const GetStudentProfile = async (req, res) => {

    try {

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Student not found",
                    {}
                )
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Student Profile fetched successfully",
                student
            )
        );

    } catch (error) {

        console.error("Get Student Profile Error:", error);

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                {}
            )
        );
    }
};


const UpdateStudentInfo = async (req, res) => {
    try {

        const { userId } = req.user;

        if (!userId) {
            return res.status(400).json(
                new ApiError(400, "Student ID is required", {})
            );
        }

        // Check student exists
        const student = await Student.findById(userId);

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        // Fields allowed to update individually
        const allowedFields = [
            "fullname",
            "profileImage",
            "studentId",
            "university",
            "college",
            "collegeId",
            "branch",
            "currentYear",
            "passingYear",
            "cgpa",
            "tenthPercentage",
            "twelfthPercentage",
            "skills",
            "resumeUrl",
            "portfolioUrl"
        ];

        const updateData = {};

        // Take only fields sent in request body
        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                updateData[field] = req.body[field];
            }
        }

        // Nothing to update
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "No valid fields provided for update",
                    {}
                )
            );
        }

        // Check duplicate studentId only if it is being changed
        if (
            updateData.studentId !== undefined &&
            updateData.studentId !== student.studentId
        ) {

            const existingStudent = await Student.findOne({
                studentId: updateData.studentId,
                _id: { $ne: userId }
            });

            if (existingStudent) {
                return res.status(409).json(
                    new ApiError(
                        409,
                        "Student ID already exists",
                        {}
                    )
                );
            }
        }

        // Update only the fields provided
        const updatedStudent = await Student.findByIdAndUpdate(
            userId,
            {
                $set: updateData
            },
            {
                new: true,
                runValidators: true
            }
        );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Student Info Updated Successfully",
                updatedStudent
            )
        );

    } catch (error) {

        console.error("Update Student Error:", error);

        // Duplicate key protection
        if (error.code === 11000) {
            return res.status(409).json(
                new ApiError(
                    409,
                    "Student ID already exists",
                    {}
                )
            );
        }

        // Mongoose validation error
        if (error.name === "ValidationError") {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid student information",
                    error.errors
                )
            );
        }

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                {}
            )
        );
    }
};

const GetCodingProfiles = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        ).select("codingProfiles");

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Coding profiles fetched successfully",
                student.codingProfiles
            )
        );

    } catch (error) {
        console.error("Get Coding Profiles Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const AddCodingProfile = async (req, res) => {
    try {
        const { platform, profileUrl } = req.body;

        if (!platform || !profileUrl) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Platform and profile URL are required",
                    {}
                )
            );
        }

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const alreadyExists = student.codingProfiles.some(
            profile => profile.platform === platform
        );

        if (alreadyExists) {
            return res.status(409).json(
                new ApiError(
                    409,
                    "Coding profile for this platform already exists",
                    {}
                )
            );
        }

        student.codingProfiles.push({
            platform,
            profileUrl
        });

        await student.save();

        return res.status(201).json(
            new ApiResponse(
                201,
                "Coding profile added successfully",
                student.codingProfiles
            )
        );

    } catch (error) {
        console.error("Add Coding Profile Error:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid coding profile data",
                    error.errors
                )
            );
        }

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const UpdateCodingProfile = async (req, res) => {
    try {
        const { platform } = req.params;
        const { profileUrl } = req.body;

        if (!profileUrl) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Profile URL is required",
                    {}
                )
            );
        }

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const profile = student.codingProfiles.find(
            item => item.platform === platform.toUpperCase()
        );

        if (!profile) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Coding profile not found",
                    {}
                )
            );
        }

        profile.profileUrl = profileUrl;

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Coding profile updated successfully",
                profile
            )
        );

    } catch (error) {
        console.error("Update Coding Profile Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const DeleteCodingProfile = async (req, res) => {
    try {
        const { platform } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const originalLength = student.codingProfiles.length;

        student.codingProfiles = student.codingProfiles.filter(
            profile =>
                profile.platform !== platform.toUpperCase()
        );

        if (student.codingProfiles.length === originalLength) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Coding profile not found",
                    {}
                )
            );
        }

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Coding profile deleted successfully",
                {}
            )
        );

    } catch (error) {
        console.error("Delete Coding Profile Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const GetProjects = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        ).select("projects");

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Projects fetched successfully",
                student.projects
            )
        );

    } catch (error) {
        console.error("Get Projects Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const AddProject = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        student.projects.push(req.body);

        await student.save();

        const project =
            student.projects[student.projects.length - 1];

        return res.status(201).json(
            new ApiResponse(
                201,
                "Project added successfully",
                project
            )
        );

    } catch (error) {
        console.error("Add Project Error:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid project data",
                    error.errors
                )
            );
        }

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const UpdateProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const project = student.projects.id(projectId);

        if (!project) {
            return res.status(404).json(
                new ApiError(404, "Project not found", {})
            );
        }

        const allowedFields = [
            "title",
            "description",
            "technologies",
            "githubUrl",
            "liveUrl",
            "startDate",
            "endDate"
        ];

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                project[field] = req.body[field];
            }
        }

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Project updated successfully",
                project
            )
        );

    } catch (error) {
        console.error("Update Project Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const DeleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const project = student.projects.id(projectId);

        if (!project) {
            return res.status(404).json(
                new ApiError(404, "Project not found", {})
            );
        }

        project.deleteOne();

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Project deleted successfully",
                {}
            )
        );

    } catch (error) {
        console.error("Delete Project Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const GetCertificates = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        ).select("certificates");

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Certificates fetched successfully",
                student.certificates
            )
        );

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const AddCertificate = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        student.certificates.push(req.body);

        await student.save();

        const certificate =
            student.certificates[
                student.certificates.length - 1
            ];

        return res.status(201).json(
            new ApiResponse(
                201,
                "Certificate added successfully",
                certificate
            )
        );

    } catch (error) {
        console.error("Add Certificate Error:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid certificate data",
                    error.errors
                )
            );
        }

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const UpdateCertificate = async (req, res) => {
    try {
        const { certificateId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const certificate =
            student.certificates.id(certificateId);

        if (!certificate) {
            return res.status(404).json(
                new ApiError(404, "Certificate not found", {})
            );
        }

        const allowedFields = [
            "name",
            "issuingOrganization",
            "issueDate",
            "credentialId",
            "credentialUrl"
        ];

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                certificate[field] = req.body[field];
            }
        }

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Certificate updated successfully",
                certificate
            )
        );

    } catch (error) {
        console.error("Update Certificate Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const DeleteCertificate = async (req, res) => {
    try {
        const { certificateId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const certificate =
            student.certificates.id(certificateId);

        if (!certificate) {
            return res.status(404).json(
                new ApiError(404, "Certificate not found", {})
            );
        }

        certificate.deleteOne();

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Certificate deleted successfully",
                {}
            )
        );

    } catch (error) {
        console.error("Delete Certificate Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const GetAchievements = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        ).select("achievements");

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Achievements fetched successfully",
                student.achievements
            )
        );

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const AddAchievement = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        student.achievements.push(req.body);

        await student.save();

        const achievement =
            student.achievements[
                student.achievements.length - 1
            ];

        return res.status(201).json(
            new ApiResponse(
                201,
                "Achievement added successfully",
                achievement
            )
        );

    } catch (error) {
        console.error("Add Achievement Error:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid achievement data",
                    error.errors
                )
            );
        }

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const UpdateAchievement = async (req, res) => {
    try {
        const { achievementId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const achievement =
            student.achievements.id(achievementId);

        if (!achievement) {
            return res.status(404).json(
                new ApiError(404, "Achievement not found", {})
            );
        }

        const allowedFields = [
            "title",
            "description",
            "date",
            "organization",
            "proofUrl"
        ];

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                achievement[field] = req.body[field];
            }
        }

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Achievement updated successfully",
                achievement
            )
        );

    } catch (error) {
        console.error("Update Achievement Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const DeleteAchievement = async (req, res) => {
    try {
        const { achievementId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const achievement =
            student.achievements.id(achievementId);

        if (!achievement) {
            return res.status(404).json(
                new ApiError(404, "Achievement not found", {})
            );
        }

        achievement.deleteOne();

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Achievement deleted successfully",
                {}
            )
        );

    } catch (error) {
        console.error("Delete Achievement Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const GetHackathons = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        ).select("hackathons");

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Hackathons fetched successfully",
                student.hackathons
            )
        );

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const AddHackathon = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        student.hackathons.push(req.body);

        await student.save();

        const hackathon =
            student.hackathons[
                student.hackathons.length - 1
            ];

        return res.status(201).json(
            new ApiResponse(
                201,
                "Hackathon added successfully",
                hackathon
            )
        );

    } catch (error) {
        console.error("Add Hackathon Error:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid hackathon data",
                    error.errors
                )
            );
        }

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const UpdateHackathon = async (req, res) => {
    try {
        const { hackathonId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const hackathon =
            student.hackathons.id(hackathonId);

        if (!hackathon) {
            return res.status(404).json(
                new ApiError(404, "Hackathon not found", {})
            );
        }

        const allowedFields = [
            "name",
            "organization",
            "role",
            "teamName",
            "projectName",
            "description",
            "technologies",
            "position",
            "date",
            "certificateUrl",
            "projectUrl"
        ];

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                hackathon[field] = req.body[field];
            }
        }

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Hackathon updated successfully",
                hackathon
            )
        );

    } catch (error) {
        console.error("Update Hackathon Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const DeleteHackathon = async (req, res) => {
    try {
        const { hackathonId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const hackathon =
            student.hackathons.id(hackathonId);

        if (!hackathon) {
            return res.status(404).json(
                new ApiError(404, "Hackathon not found", {})
            );
        }

        hackathon.deleteOne();

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Hackathon deleted successfully",
                {}
            )
        );

    } catch (error) {
        console.error("Delete Hackathon Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

const GetInternships = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        ).select("internships");

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                "Internships fetched successfully",
                student.internships
            )
        );

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const AddInternship = async (req, res) => {
    try {
        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        student.internships.push(req.body);

        await student.save();

        const internship =
            student.internships[
                student.internships.length - 1
            ];

        return res.status(201).json(
            new ApiResponse(
                201,
                "Internship added successfully",
                internship
            )
        );

    } catch (error) {
        console.error("Add Internship Error:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid internship data",
                    error.errors
                )
            );
        }

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const UpdateInternship = async (req, res) => {
    try {
        const { internshipId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const internship =
            student.internships.id(internshipId);

        if (!internship) {
            return res.status(404).json(
                new ApiError(404, "Internship not found", {})
            );
        }

        const allowedFields = [
            "company",
            "role",
            "location",
            "employmentType",
            "startDate",
            "endDate",
            "currentlyWorking",
            "description",
            "technologies",
            "certificateUrl",
            "companyUrl"
        ];

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                internship[field] = req.body[field];
            }
        }

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Internship updated successfully",
                internship
            )
        );

    } catch (error) {
        console.error("Update Internship Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


const DeleteInternship = async (req, res) => {
    try {
        const { internshipId } = req.params;

        const student = await Student.findById(
            getStudentId(req)
        );

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        const internship =
            student.internships.id(internshipId);

        if (!internship) {
            return res.status(404).json(
                new ApiError(404, "Internship not found", {})
            );
        }

        internship.deleteOne();

        await student.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Internship deleted successfully",
                {}
            )
        );

    } catch (error) {
        console.error("Delete Internship Error:", error);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};


export {

    GetStudentProfile ,

    UpdateStudentInfo,

    // Coding Profiles
    GetCodingProfiles,
    AddCodingProfile,
    UpdateCodingProfile,
    DeleteCodingProfile,

    // Projects
    GetProjects,
    AddProject,
    UpdateProject,
    DeleteProject,

    // Certificates
    GetCertificates,
    AddCertificate,
    UpdateCertificate,
    DeleteCertificate,

    // Achievements
    GetAchievements,
    AddAchievement,
    UpdateAchievement,
    DeleteAchievement,

    // Hackathons
    GetHackathons,
    AddHackathon,
    UpdateHackathon,
    DeleteHackathon,

    // Internships
    GetInternships,
    AddInternship,
    UpdateInternship,
    DeleteInternship
};