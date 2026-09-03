🗺️ PLACELY MASTER ROADMAP
ROADMAP

Phase 0  -> Planning
Phase 1  -> Project Foundation
Phase 2  -> Authentication
Phase 3  -> User Management
Phase 4  -> Placement Preparation
Phase 5  -> Online Assessment Platform
Phase 6  -> Resume & ATS
Phase 7  -> AI Features
Phase 8  -> College & Company Portal
Phase 9  -> Deployment & Scaling

Each phase contains many modules.

Phase 0 — Product Planning

Goal: Before writing code, understand exactly what you are building.

Module 0.1 Problem Statement

Research problems students face:

No centralized platform
Separate coding websites
Resume checking websites
Company information scattered
No personalized roadmap
No placement prediction
No mock interview platform

Output:

Problem Statement.pdf
Module 0.2 User Research

Identify all users.

Student
Practice
Resume
Companies
Mock Test
Coding
AI
Admin
Manage students
Manage companies
Manage questions
Analytics
Company
Post Drive
College
View analytics

Output

User Flow Diagram
Module 0.3 Feature List

Break features into

Core

Authentication

Dashboard

Resume

Coding

Aptitude

Company

AI

ATS

Recommendation

Prediction

Chatbot

Premium

Discussion

Leaderboard

Certificates

Badges

Output

Feature Documentation
Module 0.4 Wireframes

Create

Landing Page

Dashboard

Coding Page

Resume Page

Profile

Company

Mock Test

Admin

Tools

Figma

Excalidraw

Output

Complete UI Design

Phase 1 — Project Foundation
Module 1.1 Repository
Placely

docs/

client/

server/

aiml/

Module 1.2 Git Workflow

Branches

main

develop

abhay

ritik

om

sanket
Module 1.3 Frontend Setup

Install

Next.js

Tailwind

Shadcn

ESLint

Prettier

Absolute Imports

Folder Structure

Folder Structure

src

app

components

hooks

services

store

types

utils

styles

assets

Module 1.4 Backend
src

controllers

routes

middlewares

services

utils

prisma

config

validators


Install

Express

Prisma

JWT

Redis

Socket

Swagger

Helmet

Morgan

Compression

Rate Limiter

Module 1.5 Database

PostgreSQL

Prisma

Redis

Cloudinary

Deliverables

Running frontend

Running backend

Connected database

Phase 2 — Authentication

Authentication is not just login.

Modules

Registration

Email Verification

Login

Forgot Password

Reset Password

Google Login

JWT

Refresh Token

Role Management

Session

Logout

Roles

Student

Admin

College

Company

Pages

Login

Signup

Forgot Password

Verify Email

Profile

Database Tables

Users

Roles

Sessions

OTP

Refresh Tokens

Phase 3 — Student Profile

This module stores everything.

Student

Name

Branch

CGPA

Skills

Projects

Certifications

Languages

LinkedIn

GitHub

LeetCode

Resume

Preferred Role

Dream Company

Weak Areas

Pages

Profile

Edit Profile

Phase 4 — Placement Preparation

This is the biggest module.

Aptitude

Topics

Percentages

Profit Loss

Time Speed Distance

Ratio

Probability

Permutation

SI CI

Pipes

Work

Age

Average

Number System

Calendar

Clock

Features

Notes

Practice

MCQ

Timer

Bookmark

Difficulty

Hints

Explanation

Database

Topic

Question

Option

Solution

Difficulty

Verbal

Grammar

Reading

Vocabulary

Synonyms

Antonyms

Logical

Blood Relation

Coding Decoding

Direction

Puzzles

Series

Core CS

DBMS

OS

CN

OOPS

SQL

Java

C++

JavaScript

React

Node

Phase 5 — Coding Platform

This itself is another project.

Question Database

Tags

Difficulty

Company

Editorial

Hints

Problem Page

Description

Examples

Constraints

Input

Output

Hints

Discuss

Editorial

Compiler

Supported Languages

CPP

Java

Python

JavaScript

Execution Flow

Editor

↓

Backend API

↓

Docker Container

↓

Compile

↓

Execute

↓

Run Testcases

↓

Return Output

Submission

Runtime

Memory

Accepted

Wrong

TLE

MLE

Compilation Error

Leaderboard

Contest

Daily Challenge

Phase 6 — Resume

Upload PDF

Store Resume

Version History

Download

Delete

Replace

Resume Parser

Extract

Name

Email

Phone

Skills

Education

Projects

Experience

Certificates

ATS

Compare Resume

Job Description

Find Missing Skills

Grammar

Formatting

Suggestions

Score

Phase 7 — AI

This is where ML comes.

Resume ATS

Algorithms

TF-IDF

Cosine Similarity

Sentence Transformers

spaCy

Placement Prediction

Input

CGPA

DSA

Resume

Projects

Communication

Mock Scores

Attendance

Output

Placement %

Algorithms

Logistic Regression

Random Forest

Gradient Boosting

Question Recommendation

Input

Weak Topic

Company

History

Algorithms

Embeddings

Cosine Similarity

Collaborative Filtering

Chatbot

Uses

Resume

Roadmap

Doubts

Interview

Prompt Engineering

Gemini/OpenAI

Mock Interview

Speech

Transcript

Eye Contact (future)

Feedback

Confidence

Phase 8 — College & Company

College Dashboard

Placement %

Average Package

Students

Leaderboard

Company

Company Profile

Past Drives

Eligibility

OA Pattern

Interview Questions

Rounds

CTC

Phase 9 — Analytics

Student

Solved Questions

Accuracy

Weak Topics

Strong Topics

Heatmaps

Graphs

Admin

Users

Companies

Tests

Questions

Traffic

Phase 10 — Deployment & DevOps

Docker

CI/CD

GitHub Actions

Nginx

HTTPS

Redis

CDN

Logging

Monitoring

Backups

AI/ML Architecture (separate service)
                 Frontend (Next.js)
                         │
                         ▼
               Backend API (Node.js)
                         │
        ┌────────────────┴────────────────┐
        ▼                                 ▼
 PostgreSQL                        Redis Cache
        │
        ▼
 AI Service (Python/FastAPI)
        │
 ├── Resume ATS
 ├── Placement Prediction
 ├── Recommendation Engine
 ├── NLP Processing
 └── Embedding Models