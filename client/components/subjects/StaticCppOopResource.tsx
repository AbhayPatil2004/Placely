"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronRight } from "lucide-react";

type StaticSection = { id: string; topicId: number; heading: string };
type StaticTopic = { title: string; sectionIds: readonly string[]; sections: readonly StaticSection[] };

export const CPP_OOP_SUBSECTIONS: readonly StaticSection[] = [
  { id: "1001", topicId: 1001, heading: "1. Class" },
  { id: "1002", topicId: 1002, heading: "2. Object" },
  { id: "1003", topicId: 1003, heading: "3. Constructor" },
  { id: "1004", topicId: 1004, heading: "Types of constructors" },
  { id: "2001", topicId: 2001, heading: "What it does" },
  { id: "3001", topicId: 3001, heading: "The three access levels" },
  { id: "4001", topicId: 4001, heading: "How data hiding works" },
  { id: "5001", topicId: 5001, heading: "1. Abstraction" },
  { id: "5002", topicId: 5002, heading: "Abstract classes and pure virtual functions" },
  { id: "5003", topicId: 5003, heading: "2. Encapsulation" },
  { id: "5004", topicId: 5004, heading: "3. Inheritance" },
  { id: "5005", topicId: 5005, heading: "Types of inheritance" },
  { id: "5006", topicId: 5006, heading: "4. Polymorphism" },
  { id: "5007", topicId: 5007, heading: "Compile-time vs run-time polymorphism" },
  { id: "6001", topicId: 6001, heading: "How virtual functions work" },
  { id: "7001", topicId: 7001, heading: "Association" },
  { id: "7002", topicId: 7002, heading: "Aggregation — weak has-a relationship" },
  { id: "7003", topicId: 7003, heading: "Composition — strong has-a relationship" },
  { id: "8001", topicId: 8001, heading: "Main advantages" },
  { id: "9001", topicId: 9001, heading: "Main limitations" },
  { id: "10001", topicId: 10001, heading: "Question 1" },
  { id: "10002", topicId: 10002, heading: "Question 2" },
  { id: "10003", topicId: 10003, heading: "Question 3" },
  { id: "10004", topicId: 10004, heading: "Question 4" },
  { id: "10005", topicId: 10005, heading: "Question 5" },
  { id: "11001", topicId: 11001, heading: "S — Single Responsibility Principle (SRP)" },
  { id: "11002", topicId: 11002, heading: "O — Open/Closed Principle (OCP)" },
  { id: "11003", topicId: 11003, heading: "L — Liskov Substitution Principle (LSP)" },
  { id: "11004", topicId: 11004, heading: "I — Interface Segregation Principle (ISP)" },
  { id: "11005", topicId: 11005, heading: "D — Dependency Inversion Principle (DIP)" },
  { id: "12001", topicId: 12001, heading: "What are design patterns?" },
  { id: "12002", topicId: 12002, heading: "Categories of design patterns" },
  { id: "12003", topicId: 12003, heading: "Singleton (Creational)" },
  { id: "12004", topicId: 12004, heading: "Factory Method (Creational)" },
  { id: "12005", topicId: 12005, heading: "Builder (Creational)" },
  { id: "12006", topicId: 12006, heading: "Adapter (Structural)" },
  { id: "12007", topicId: 12007, heading: "Decorator (Structural)" },
  { id: "12008", topicId: 12008, heading: "Observer (Behavioral)" },
  { id: "12009", topicId: 12009, heading: "Strategy (Behavioral)" },
];

const topics: readonly StaticTopic[] = [
  { title: "Characteristics of OOP", sectionIds: ["1001", "1002", "1003", "1004"], sections: [{ id: "1001", topicId: 1001, heading: "1. Class" }, { id: "1002", topicId: 1002, heading: "2. Object" }, { id: "1003", topicId: 1003, heading: "3. Constructor" }, { id: "1004", topicId: 1004, heading: "Types of constructors" }] },
  { title: "Destructor", sectionIds: ["2001"], sections: [{ id: "2001", topicId: 2001, heading: "What it does" }] },
  { title: "Access Specifiers", sectionIds: ["3001"], sections: [{ id: "3001", topicId: 3001, heading: "The three access levels" }] },
  { title: "Data Hiding", sectionIds: ["4001"], sections: [{ id: "4001", topicId: 4001, heading: "How data hiding works" }] },
  { title: "Four Pillars of OOP in C++", sectionIds: ["5001", "5002", "5003", "5004", "5005", "5006", "5007"], sections: [{ id: "5001", topicId: 5001, heading: "1. Abstraction" }, { id: "5002", topicId: 5002, heading: "Abstract classes and pure virtual functions" }, { id: "5003", topicId: 5003, heading: "2. Encapsulation" }, { id: "5004", topicId: 5004, heading: "3. Inheritance" }, { id: "5005", topicId: 5005, heading: "Types of inheritance" }, { id: "5006", topicId: 5006, heading: "4. Polymorphism" }, { id: "5007", topicId: 5007, heading: "Compile-time vs run-time polymorphism" }] },
  { title: "Virtual Functions", sectionIds: ["6001"], sections: [{ id: "6001", topicId: 6001, heading: "How virtual functions work" }] },
  { title: "Relationships Between Classes in C++", sectionIds: ["7001", "7002", "7003"], sections: [{ id: "7001", topicId: 7001, heading: "Association" }, { id: "7002", topicId: 7002, heading: "Aggregation — weak has-a relationship" }, { id: "7003", topicId: 7003, heading: "Composition — strong has-a relationship" }] },
  { title: "Advantages of OOP in C++", sectionIds: ["8001"], sections: [{ id: "8001", topicId: 8001, heading: "Main advantages" }] },
  { title: "Limitations of OOP in C++", sectionIds: ["9001"], sections: [{ id: "9001", topicId: 9001, heading: "Main limitations" }] },
  { title: "OOP Fundamentals — Quick Practice", sectionIds: ["10001", "10002", "10003", "10004", "10005"], sections: [{ id: "10001", topicId: 10001, heading: "Question 1" }, { id: "10002", topicId: 10002, heading: "Question 2" }, { id: "10003", topicId: 10003, heading: "Question 3" }, { id: "10004", topicId: 10004, heading: "Question 4" }, { id: "10005", topicId: 10005, heading: "Question 5" }] },
  { title: "SOLID Principles", sectionIds: ["11001", "11002", "11003", "11004", "11005"], sections: [{ id: "11001", topicId: 11001, heading: "S — Single Responsibility Principle (SRP)" }, { id: "11002", topicId: 11002, heading: "O — Open/Closed Principle (OCP)" }, { id: "11003", topicId: 11003, heading: "L — Liskov Substitution Principle (LSP)" }, { id: "11004", topicId: 11004, heading: "I — Interface Segregation Principle (ISP)" }, { id: "11005", topicId: 11005, heading: "D — Dependency Inversion Principle (DIP)" }] },
  { title: "Design Patterns", sectionIds: ["12001", "12002", "12003", "12004", "12005", "12006", "12007", "12008", "12009"], sections: [{ id: "12001", topicId: 12001, heading: "What are design patterns?" }, { id: "12002", topicId: 12002, heading: "Categories of design patterns" }, { id: "12003", topicId: 12003, heading: "Singleton (Creational)" }, { id: "12004", topicId: 12004, heading: "Factory Method (Creational)" }, { id: "12005", topicId: 12005, heading: "Builder (Creational)" }, { id: "12006", topicId: 12006, heading: "Adapter (Structural)" }, { id: "12007", topicId: 12007, heading: "Decorator (Structural)" }, { id: "12008", topicId: 12008, heading: "Observer (Behavioral)" }, { id: "12009", topicId: 12009, heading: "Strategy (Behavioral)" }] },
];

type StaticCppOopResourceProps = {
  checkedById: Record<string, boolean>;
  progressLoading: boolean;
  onToggle: (id: string, topicId: number, heading: string) => void;
};

export function StaticCppOopResource({ checkedById, progressLoading, onToggle }: StaticCppOopResourceProps) {
  const [expandedTopics, setExpandedTopics] = useState<Record<number, boolean>>({});
  const completed0 = topics[0].sectionIds.filter((id) => checkedById[id]).length;
  const completed1 = topics[1].sectionIds.filter((id) => checkedById[id]).length;
  const completed2 = topics[2].sectionIds.filter((id) => checkedById[id]).length;
  const completed3 = topics[3].sectionIds.filter((id) => checkedById[id]).length;
  const completed4 = topics[4].sectionIds.filter((id) => checkedById[id]).length;
  const completed5 = topics[5].sectionIds.filter((id) => checkedById[id]).length;
  const completed6 = topics[6].sectionIds.filter((id) => checkedById[id]).length;
  const completed7 = topics[7].sectionIds.filter((id) => checkedById[id]).length;
  const completed8 = topics[8].sectionIds.filter((id) => checkedById[id]).length;
  const completed9 = topics[9].sectionIds.filter((id) => checkedById[id]).length;
  const completed10 = topics[10].sectionIds.filter((id) => checkedById[id]).length;
  const completed11 = topics[11].sectionIds.filter((id) => checkedById[id]).length;
  return (
    <section aria-label="Object Oriented Programming in C++ topics" className="overflow-hidden rounded-cards border border-graphite bg-surface shadow-subtle">
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 1</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Characteristics of OOP"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"OOP organizes a program around classes and objects. Constructors initialize objects when they are created."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed0}/4</div>
              <div>{Math.round((completed0 / 4) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed0 / 4) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[0] ? "Collapse Characteristics of OOP" : "Expand Characteristics of OOP"} aria-expanded={Boolean(expandedTopics[0])} aria-controls="static-oop-topic-0" onClick={() => setExpandedTopics((current) => ({ ...current, [0]: !current[0] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[0] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-0" hidden={!expandedTopics[0]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[0] ? <>
            <article id="resource-cpp-oop-complete-1001" className={'rounded-cards border p-4 ' + (checkedById["1001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-1001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark 1. Class complete"}>
                  <input id="cpp-oop-complete-1001" type="checkbox" checked={Boolean(checkedById["1001"])} disabled={progressLoading} onChange={() => onToggle("1001", 1001, "1. Class")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"1. Class"}</h3>
                    {checkedById["1001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"1. Class"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"A class is a user-defined data type and a blueprint for creating objects."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"It groups data members and member functions."}</li>
                      <li className="whitespace-pre-wrap">{"One class can be used to create many objects."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A Car class can describe cars such as BMW, Mercedes, and Audi."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-1002" className={'rounded-cards border p-4 ' + (checkedById["1002"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-1002" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark 2. Object complete"}>
                  <input id="cpp-oop-complete-1002" type="checkbox" checked={Boolean(checkedById["1002"])} disabled={progressLoading} onChange={() => onToggle("1002", 1002, "2. Object")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"2. Object"}</h3>
                    {checkedById["1002"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"2. Object"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"An object is an instance of a class. It uses the data and functions defined by that class."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"State: the current values of its data members."}</li>
                      <li className="whitespace-pre-wrap">{"Behavior: actions provided by its member functions."}</li>
                      <li className="whitespace-pre-wrap">{"Identity: each object is distinct, even if its data matches another object's."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"Dog is a class; Tommy can be one object of that class."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-1003" className={'rounded-cards border p-4 ' + (checkedById["1003"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-1003" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark 3. Constructor complete"}>
                  <input id="cpp-oop-complete-1003" type="checkbox" checked={Boolean(checkedById["1003"])} disabled={progressLoading} onChange={() => onToggle("1003", 1003, "3. Constructor")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"3. Constructor"}</h3>
                    {checkedById["1003"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"3. Constructor"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"A constructor is a special member function that runs automatically when an object is created. It initializes the object's starting state."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Its name matches the class name."}</li>
                      <li className="whitespace-pre-wrap">{"It has no return type, not even void."}</li>
                      <li className="whitespace-pre-wrap">{"It is invoked automatically during object creation."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-1004" className={'rounded-cards border p-4 ' + (checkedById["1004"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-1004" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Types of constructors complete"}>
                  <input id="cpp-oop-complete-1004" type="checkbox" checked={Boolean(checkedById["1004"])} disabled={progressLoading} onChange={() => onToggle("1004", 1004, "Types of constructors")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Types of constructors"}</h3>
                    {checkedById["1004"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Types of constructors"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"C++ supports different ways to initialize objects."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Default constructor: takes no parameters."}</li>
                      <li className="whitespace-pre-wrap">{"Parameterized constructor: accepts values as parameters."}</li>
                      <li className="whitespace-pre-wrap">{"Copy constructor: creates an object from another object of the same class."}</li>
                      <li className="whitespace-pre-wrap">{"Move constructor (C++11): transfers resources from a temporary object instead of copying them."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Class = blueprint; object = instance."}</li>
                <li className="whitespace-pre-wrap">{"Constructor = automatic initialization."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 2</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Destructor"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"A destructor performs cleanup when an object is destroyed."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed1}/1</div>
              <div>{Math.round((completed1 / 1) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed1 / 1) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[1] ? "Collapse Destructor" : "Expand Destructor"} aria-expanded={Boolean(expandedTopics[1])} aria-controls="static-oop-topic-1" onClick={() => setExpandedTopics((current) => ({ ...current, [1]: !current[1] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[1] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-1" hidden={!expandedTopics[1]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[1] ? <>
            <article id="resource-cpp-oop-complete-2001" className={'rounded-cards border p-4 ' + (checkedById["2001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-2001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark What it does complete"}>
                  <input id="cpp-oop-complete-2001" type="checkbox" checked={Boolean(checkedById["2001"])} disabled={progressLoading} onChange={() => onToggle("2001", 2001, "What it does")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"What it does"}</h3>
                    {checkedById["2001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"What it does"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"A destructor is a special member function commonly used to release resources such as dynamically allocated memory, open files, or network connections."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Its name is the class name preceded by ~, for example ~File()."}</li>
                      <li className="whitespace-pre-wrap">{"It has no return type and takes no parameters."}</li>
                      <li className="whitespace-pre-wrap">{"A class can have only one destructor."}</li>
                      <li className="whitespace-pre-wrap">{"It is called when an object goes out of scope or is deleted."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A File object's destructor can close the file and release associated resources."}</p>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Constructor initializes; destructor cleans up."}</li>
                <li className="whitespace-pre-wrap">{"Destructor syntax: ~ClassName()."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 3</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Access Specifiers"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"Access specifiers determine where class members can be accessed."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed2}/1</div>
              <div>{Math.round((completed2 / 1) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed2 / 1) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[2] ? "Collapse Access Specifiers" : "Expand Access Specifiers"} aria-expanded={Boolean(expandedTopics[2])} aria-controls="static-oop-topic-2" onClick={() => setExpandedTopics((current) => ({ ...current, [2]: !current[2] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[2] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-2" hidden={!expandedTopics[2]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[2] ? <>
            <article id="resource-cpp-oop-complete-3001" className={'rounded-cards border p-4 ' + (checkedById["3001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-3001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark The three access levels complete"}>
                  <input id="cpp-oop-complete-3001" type="checkbox" checked={Boolean(checkedById["3001"])} disabled={progressLoading} onChange={() => onToggle("3001", 3001, "The three access levels")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"The three access levels"}</h3>
                    {checkedById["3001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"The three access levels"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Use access specifiers to control visibility and help implement encapsulation."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"public: accessible from anywhere the object/member is visible."}</li>
                      <li className="whitespace-pre-wrap">{"private: accessible only within the same class (and its friends)."}</li>
                      <li className="whitespace-pre-wrap">{"protected: accessible within the class and its derived classes (and friends)."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A bank account can keep balance private and provide public deposit(), withdraw(), and getBalance() functions."}</p>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"public = broadly accessible; private = class-controlled; protected = class and derived classes."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 4</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Data Hiding"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"Data hiding prevents direct access to internal data and exposes controlled operations instead."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed3}/1</div>
              <div>{Math.round((completed3 / 1) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed3 / 1) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[3] ? "Collapse Data Hiding" : "Expand Data Hiding"} aria-expanded={Boolean(expandedTopics[3])} aria-controls="static-oop-topic-3" onClick={() => setExpandedTopics((current) => ({ ...current, [3]: !current[3] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[3] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-3" hidden={!expandedTopics[3]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[3] ? <>
            <article id="resource-cpp-oop-complete-4001" className={'rounded-cards border p-4 ' + (checkedById["4001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-4001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark How data hiding works complete"}>
                  <input id="cpp-oop-complete-4001" type="checkbox" checked={Boolean(checkedById["4001"])} disabled={progressLoading} onChange={() => onToggle("4001", 4001, "How data hiding works")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"How data hiding works"}</h3>
                    {checkedById["4001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"How data hiding works"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"In C++, data hiding is commonly implemented with private or protected members and public member functions."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Reduces unauthorized or accidental changes."}</li>
                      <li className="whitespace-pre-wrap">{"Protects an object's internal state."}</li>
                      <li className="whitespace-pre-wrap">{"Getters and setters can provide controlled access."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A BankAccount keeps balance private; users interact with it through deposit(), withdraw(), or getBalance()."}</p>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Hide data; expose only the operations that should be allowed."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 5</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Four Pillars of OOP in C++"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"The four pillars are abstraction, encapsulation, inheritance, and polymorphism."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed4}/7</div>
              <div>{Math.round((completed4 / 7) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed4 / 7) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[4] ? "Collapse Four Pillars of OOP in C++" : "Expand Four Pillars of OOP in C++"} aria-expanded={Boolean(expandedTopics[4])} aria-controls="static-oop-topic-4" onClick={() => setExpandedTopics((current) => ({ ...current, [4]: !current[4] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[4] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-4" hidden={!expandedTopics[4]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[4] ? <>
            <article id="resource-cpp-oop-complete-5001" className={'rounded-cards border p-4 ' + (checkedById["5001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-5001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark 1. Abstraction complete"}>
                  <input id="cpp-oop-complete-5001" type="checkbox" checked={Boolean(checkedById["5001"])} disabled={progressLoading} onChange={() => onToggle("5001", 5001, "1. Abstraction")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"1. Abstraction"}</h3>
                    {checkedById["5001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"1. Abstraction"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Show essential features while hiding implementation details."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Users work through a clear interface."}</li>
                      <li className="whitespace-pre-wrap">{"Implementation can change without changing code that uses the interface."}</li>
                      <li className="whitespace-pre-wrap">{"In C++, abstract classes and pure virtual functions can define an abstraction."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"An ATM lets a user withdraw cash without knowing the internal banking process."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-5002" className={'rounded-cards border p-4 ' + (checkedById["5002"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-5002" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Abstract classes and pure virtual functions complete"}>
                  <input id="cpp-oop-complete-5002" type="checkbox" checked={Boolean(checkedById["5002"])} disabled={progressLoading} onChange={() => onToggle("5002", 5002, "Abstract classes and pure virtual functions")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Abstract classes and pure virtual functions"}</h3>
                    {checkedById["5002"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Abstract classes and pure virtual functions"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"An abstract class contains at least one pure virtual function, declared with = 0. It cannot be instantiated directly."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Derived classes provide implementations for the pure virtual functions."}</li>
                      <li className="whitespace-pre-wrap">{"A Shape class might declare draw() = 0; Circle and Rectangle can implement draw()."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-5003" className={'rounded-cards border p-4 ' + (checkedById["5003"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-5003" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark 2. Encapsulation complete"}>
                  <input id="cpp-oop-complete-5003" type="checkbox" checked={Boolean(checkedById["5003"])} disabled={progressLoading} onChange={() => onToggle("5003", 5003, "2. Encapsulation")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"2. Encapsulation"}</h3>
                    {checkedById["5003"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"2. Encapsulation"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Bundle data and the functions that operate on it into a class, while controlling access to the data."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Data members are often private."}</li>
                      <li className="whitespace-pre-wrap">{"Public functions provide controlled access."}</li>
                      <li className="whitespace-pre-wrap">{"Supports modularity and maintainability."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A bank account exposes deposit(), withdraw(), and getBalance() instead of allowing arbitrary direct balance changes."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-5004" className={'rounded-cards border p-4 ' + (checkedById["5004"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-5004" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark 3. Inheritance complete"}>
                  <input id="cpp-oop-complete-5004" type="checkbox" checked={Boolean(checkedById["5004"])} disabled={progressLoading} onChange={() => onToggle("5004", 5004, "3. Inheritance")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"3. Inheritance"}</h3>
                    {checkedById["5004"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"3. Inheritance"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"A derived class acquires accessible members and behavior from a base class. It commonly represents an “is-a” relationship."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Base class = class being inherited from."}</li>
                      <li className="whitespace-pre-wrap">{"Derived class = class that inherits."}</li>
                      <li className="whitespace-pre-wrap">{"Promotes reuse and extension; access still depends on access specifiers."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"Dog, Cat, and Cow can derive from Animal."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-5005" className={'rounded-cards border p-4 ' + (checkedById["5005"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-5005" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Types of inheritance complete"}>
                  <input id="cpp-oop-complete-5005" type="checkbox" checked={Boolean(checkedById["5005"])} disabled={progressLoading} onChange={() => onToggle("5005", 5005, "Types of inheritance")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Types of inheritance"}</h3>
                    {checkedById["5005"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Types of inheritance"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"C++ commonly describes five inheritance structures."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Single: one derived class inherits from one base class."}</li>
                      <li className="whitespace-pre-wrap">{"Multiple: one derived class inherits from more than one base class."}</li>
                      <li className="whitespace-pre-wrap">{"Multilevel: inheritance forms a chain."}</li>
                      <li className="whitespace-pre-wrap">{"Hierarchical: multiple derived classes share one base class."}</li>
                      <li className="whitespace-pre-wrap">{"Hybrid: combination of inheritance types."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-5006" className={'rounded-cards border p-4 ' + (checkedById["5006"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-5006" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark 4. Polymorphism complete"}>
                  <input id="cpp-oop-complete-5006" type="checkbox" checked={Boolean(checkedById["5006"])} disabled={progressLoading} onChange={() => onToggle("5006", 5006, "4. Polymorphism")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"4. Polymorphism"}</h3>
                    {checkedById["5006"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"4. Polymorphism"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Polymorphism means “many forms”: the same interface can behave differently depending on the parameters or actual object."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Compile-time: function overloading and operator overloading."}</li>
                      <li className="whitespace-pre-wrap">{"Run-time: overriding a virtual function, selected according to the actual object type."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A speak() operation can produce Bark for Dog, Meow for Cat, and Moo for Cow."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-5007" className={'rounded-cards border p-4 ' + (checkedById["5007"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-5007" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Compile-time vs run-time polymorphism complete"}>
                  <input id="cpp-oop-complete-5007" type="checkbox" checked={Boolean(checkedById["5007"])} disabled={progressLoading} onChange={() => onToggle("5007", 5007, "Compile-time vs run-time polymorphism")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Compile-time vs run-time polymorphism"}</h3>
                    {checkedById["5007"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Compile-time vs run-time polymorphism"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Compile-time polymorphism is resolved by the compiler; run-time polymorphism is resolved during execution."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Function overloading: same function name with different parameter lists."}</li>
                      <li className="whitespace-pre-wrap">{"Operator overloading: define operator behavior for user-defined types."}</li>
                      <li className="whitespace-pre-wrap">{"Function overriding with virtual functions: derived class supplies a run-time implementation."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Abstraction = hide implementation details."}</li>
                <li className="whitespace-pre-wrap">{"Encapsulation = bundle data and methods; control access."}</li>
                <li className="whitespace-pre-wrap">{"Inheritance = reuse and extend a base class."}</li>
                <li className="whitespace-pre-wrap">{"Polymorphism = one interface, different behavior."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 6</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Virtual Functions"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"Virtual functions enable run-time polymorphism in C++."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed5}/1</div>
              <div>{Math.round((completed5 / 1) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed5 / 1) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[5] ? "Collapse Virtual Functions" : "Expand Virtual Functions"} aria-expanded={Boolean(expandedTopics[5])} aria-controls="static-oop-topic-5" onClick={() => setExpandedTopics((current) => ({ ...current, [5]: !current[5] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[5] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-5" hidden={!expandedTopics[5]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[5] ? <>
            <article id="resource-cpp-oop-complete-6001" className={'rounded-cards border p-4 ' + (checkedById["6001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-6001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark How virtual functions work complete"}>
                  <input id="cpp-oop-complete-6001" type="checkbox" checked={Boolean(checkedById["6001"])} disabled={progressLoading} onChange={() => onToggle("6001", 6001, "How virtual functions work")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"How virtual functions work"}</h3>
                    {checkedById["6001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"How virtual functions work"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"A base-class function declared virtual can be overridden by a derived class. The implementation selected at run time depends on the actual object."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Useful when calling through a base-class pointer or reference."}</li>
                      <li className="whitespace-pre-wrap">{"Supports dynamic dispatch."}</li>
                      <li className="whitespace-pre-wrap">{"Derived classes can provide their own implementation."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"Shape can declare virtual draw(); Circle and Rectangle can each implement draw()."}</p>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Use virtual in the base class when you want overridden behavior selected at run time."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 7</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Relationships Between Classes in C++"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"Class relationships describe how objects interact and whether one object owns another."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed6}/3</div>
              <div>{Math.round((completed6 / 3) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed6 / 3) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[6] ? "Collapse Relationships Between Classes in C++" : "Expand Relationships Between Classes in C++"} aria-expanded={Boolean(expandedTopics[6])} aria-controls="static-oop-topic-6" onClick={() => setExpandedTopics((current) => ({ ...current, [6]: !current[6] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[6] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-6" hidden={!expandedTopics[6]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[6] ? <>
            <article id="resource-cpp-oop-complete-7001" className={'rounded-cards border p-4 ' + (checkedById["7001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-7001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Association complete"}>
                  <input id="cpp-oop-complete-7001" type="checkbox" checked={Boolean(checkedById["7001"])} disabled={progressLoading} onChange={() => onToggle("7001", 7001, "Association")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Association"}</h3>
                    {checkedById["7001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Association"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Association is a relationship between independent objects that interact. It is often described as a “uses-a” relationship."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Does not imply ownership."}</li>
                      <li className="whitespace-pre-wrap">{"Objects can have independent lifetimes."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A teacher teaches students; both can exist independently."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-7002" className={'rounded-cards border p-4 ' + (checkedById["7002"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-7002" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Aggregation — weak has-a relationship complete"}>
                  <input id="cpp-oop-complete-7002" type="checkbox" checked={Boolean(checkedById["7002"])} disabled={progressLoading} onChange={() => onToggle("7002", 7002, "Aggregation — weak has-a relationship")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Aggregation — weak has-a relationship"}</h3>
                    {checkedById["7002"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Aggregation — weak has-a relationship"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Aggregation describes a class that contains or refers to another object without controlling its lifetime."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Represents weak ownership."}</li>
                      <li className="whitespace-pre-wrap">{"The contained object can exist independently of the container."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A company has employees; employees can continue to exist if the company closes."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-7003" className={'rounded-cards border p-4 ' + (checkedById["7003"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-7003" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Composition — strong has-a relationship complete"}>
                  <input id="cpp-oop-complete-7003" type="checkbox" checked={Boolean(checkedById["7003"])} disabled={progressLoading} onChange={() => onToggle("7003", 7003, "Composition — strong has-a relationship")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Composition — strong has-a relationship"}</h3>
                    {checkedById["7003"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Composition — strong has-a relationship"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Composition describes stronger ownership: the contained object's lifetime is tied to the owning object."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Represents strong ownership."}</li>
                      <li className="whitespace-pre-wrap">{"Destroying the owner also ends the lifetime of its contained parts, according to the ownership design."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A house can be modeled as composed of rooms."}</p>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Association = interacts with; aggregation = has-a, independent lifetimes; composition = has-a, dependent lifetimes."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 8</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Advantages of OOP in C++"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"OOP helps organize software into reusable, modular units."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed7}/1</div>
              <div>{Math.round((completed7 / 1) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed7 / 1) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[7] ? "Collapse Advantages of OOP in C++" : "Expand Advantages of OOP in C++"} aria-expanded={Boolean(expandedTopics[7])} aria-controls="static-oop-topic-7" onClick={() => setExpandedTopics((current) => ({ ...current, [7]: !current[7] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[7] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-7" hidden={!expandedTopics[7]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[7] ? <>
            <article id="resource-cpp-oop-complete-8001" className={'rounded-cards border p-4 ' + (checkedById["8001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-8001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Main advantages complete"}>
                  <input id="cpp-oop-complete-8001" type="checkbox" checked={Boolean(checkedById["8001"])} disabled={progressLoading} onChange={() => onToggle("8001", 8001, "Main advantages")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Main advantages"}</h3>
                    {checkedById["8001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Main advantages"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Classes and objects can make larger programs easier to develop and maintain."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Code reusability: reuse existing classes and behavior, including through inheritance."}</li>
                      <li className="whitespace-pre-wrap">{"Better organization: group related data and operations."}</li>
                      <li className="whitespace-pre-wrap">{"Modularity: classes can be developed, tested, and debugged as separate units."}</li>
                      <li className="whitespace-pre-wrap">{"DRY: reduce duplicated logic by keeping common behavior in one place."}</li>
                      <li className="whitespace-pre-wrap">{"Scalability: extend a modular design more easily."}</li>
                      <li className="whitespace-pre-wrap">{"Data protection: encapsulation controls direct access to data."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Think: reuse, organization, modularity, less duplication, scalability, controlled access."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 9</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Limitations of OOP in C++"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"OOP is useful, but it can add complexity and overhead when used unnecessarily."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed8}/1</div>
              <div>{Math.round((completed8 / 1) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed8 / 1) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[8] ? "Collapse Limitations of OOP in C++" : "Expand Limitations of OOP in C++"} aria-expanded={Boolean(expandedTopics[8])} aria-controls="static-oop-topic-8" onClick={() => setExpandedTopics((current) => ({ ...current, [8]: !current[8] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[8] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-8" hidden={!expandedTopics[8]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[8] ? <>
            <article id="resource-cpp-oop-complete-9001" className={'rounded-cards border p-4 ' + (checkedById["9001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-9001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Main limitations complete"}>
                  <input id="cpp-oop-complete-9001" type="checkbox" checked={Boolean(checkedById["9001"])} disabled={progressLoading} onChange={() => onToggle("9001", 9001, "Main limitations")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Main limitations"}</h3>
                    {checkedById["9001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Main limitations"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"OOP design requires decisions about classes, responsibilities, inheritance, and object relationships."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Learning curve: abstraction, inheritance, and polymorphism can be challenging for beginners."}</li>
                      <li className="whitespace-pre-wrap">{"Design complexity: class hierarchies require careful planning."}</li>
                      <li className="whitespace-pre-wrap">{"Extra structure: small programs may need more code than a procedural solution."}</li>
                      <li className="whitespace-pre-wrap">{"Memory use: objects and some run-time features can add memory costs."}</li>
                      <li className="whitespace-pre-wrap">{"Performance overhead: dynamic dispatch and virtual functions can introduce small run-time costs."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"OOP is not automatically best for every small program; choose the design that fits the problem."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 10</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"OOP Fundamentals — Quick Practice"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"Use these questions for a quick self-check after reading the topic sections."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed9}/5</div>
              <div>{Math.round((completed9 / 5) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed9 / 5) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[9] ? "Collapse OOP Fundamentals — Quick Practice" : "Expand OOP Fundamentals — Quick Practice"} aria-expanded={Boolean(expandedTopics[9])} aria-controls="static-oop-topic-9" onClick={() => setExpandedTopics((current) => ({ ...current, [9]: !current[9] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[9] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-9" hidden={!expandedTopics[9]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[9] ? <>
            <article id="resource-cpp-oop-complete-10001" className={'rounded-cards border p-4 ' + (checkedById["10001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-10001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Question 1 complete"}>
                  <input id="cpp-oop-complete-10001" type="checkbox" checked={Boolean(checkedById["10001"])} disabled={progressLoading} onChange={() => onToggle("10001", 10001, "Question 1")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Question 1"}</h3>
                    {checkedById["10001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Question 1"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Why was OOP introduced?"}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"A. To make programs run faster only"}</li>
                      <li className="whitespace-pre-wrap">{"B. To organize code using classes and objects for reuse and maintenance"}</li>
                      <li className="whitespace-pre-wrap">{"C. To remove functions"}</li>
                      <li className="whitespace-pre-wrap">{"D. To reduce memory usage only"}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-10002" className={'rounded-cards border p-4 ' + (checkedById["10002"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-10002" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Question 2 complete"}>
                  <input id="cpp-oop-complete-10002" type="checkbox" checked={Boolean(checkedById["10002"])} disabled={progressLoading} onChange={() => onToggle("10002", 10002, "Question 2")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Question 2"}</h3>
                    {checkedById["10002"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Question 2"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"What is a class in C++?"}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"A. A variable"}</li>
                      <li className="whitespace-pre-wrap">{"B. A blueprint for creating objects"}</li>
                      <li className="whitespace-pre-wrap">{"C. A function"}</li>
                      <li className="whitespace-pre-wrap">{"D. A keyword"}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-10003" className={'rounded-cards border p-4 ' + (checkedById["10003"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-10003" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Question 3 complete"}>
                  <input id="cpp-oop-complete-10003" type="checkbox" checked={Boolean(checkedById["10003"])} disabled={progressLoading} onChange={() => onToggle("10003", 10003, "Question 3")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Question 3"}</h3>
                    {checkedById["10003"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Question 3"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Which OOP concept is most directly associated with allowing a derived class to provide a different implementation of a base-class function?"}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"A. Encapsulation"}</li>
                      <li className="whitespace-pre-wrap">{"B. Polymorphism"}</li>
                      <li className="whitespace-pre-wrap">{"C. Abstraction"}</li>
                      <li className="whitespace-pre-wrap">{"D. Data hiding"}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-10004" className={'rounded-cards border p-4 ' + (checkedById["10004"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-10004" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Question 4 complete"}>
                  <input id="cpp-oop-complete-10004" type="checkbox" checked={Boolean(checkedById["10004"])} disabled={progressLoading} onChange={() => onToggle("10004", 10004, "Question 4")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Question 4"}</h3>
                    {checkedById["10004"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Question 4"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Which line creates an object of class Student?"}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"A. class Student s;"}</li>
                      <li className="whitespace-pre-wrap">{"B. Student();"}</li>
                      <li className="whitespace-pre-wrap">{"C. Student s;"}</li>
                      <li className="whitespace-pre-wrap">{"D. object Student;"}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-10005" className={'rounded-cards border p-4 ' + (checkedById["10005"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-10005" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Question 5 complete"}>
                  <input id="cpp-oop-complete-10005" type="checkbox" checked={Boolean(checkedById["10005"])} disabled={progressLoading} onChange={() => onToggle("10005", 10005, "Question 5")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Question 5"}</h3>
                    {checkedById["10005"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Question 5"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"What is the output of this program?"}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"A. Car"}</li>
                      <li className="whitespace-pre-wrap">{"B. Error"}</li>
                      <li className="whitespace-pre-wrap">{"C. Garbage value"}</li>
                      <li className="whitespace-pre-wrap">{"D. Toyota"}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"The program assigns \"Toyota\" to c1.brand and prints that value."}</p>
                    <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-abyss p-3 font-mono text-xs leading-5 text-medium-gray"><code>{"#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\npublic:\n    string brand;\n};\n\nint main() {\n    Car c1;\n    c1.brand = \"Toyota\";\n    cout << c1.brand;\n    return 0;\n}"}</code></pre>
                  </section>
                </div>
              </div>
            </article>
            <section className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Answer key</h3>
              <ol className="mt-2 space-y-3">
                <li className="text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Question 1: {"B"}</span><p className="whitespace-pre-wrap">{"OOP organizes code with classes and objects, supporting reuse and maintenance."}</p></li>
                <li className="text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Question 2: {"B"}</span><p className="whitespace-pre-wrap">{"A class defines the data and functions that objects of that class can use."}</p></li>
                <li className="text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Question 3: {"B"}</span><p className="whitespace-pre-wrap">{"Polymorphism allows the same interface to exhibit different behavior; overriding virtual functions supports run-time polymorphism."}</p></li>
                <li className="text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Question 4: {"C"}</span><p className="whitespace-pre-wrap">{"Student s; declares an object named s of class Student."}</p></li>
                <li className="text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Question 5: {"D"}</span><p className="whitespace-pre-wrap">{"The program prints the string assigned to c1.brand: Toyota."}</p></li>
              </ol>
            </section>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 11</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"SOLID Principles"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"SOLID is a set of five object-oriented design principles that help make classes easier to understand, extend, test, and maintain."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed10}/5</div>
              <div>{Math.round((completed10 / 5) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed10 / 5) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[10] ? "Collapse SOLID Principles" : "Expand SOLID Principles"} aria-expanded={Boolean(expandedTopics[10])} aria-controls="static-oop-topic-10" onClick={() => setExpandedTopics((current) => ({ ...current, [10]: !current[10] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[10] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-10" hidden={!expandedTopics[10]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[10] ? <>
            <article id="resource-cpp-oop-complete-11001" className={'rounded-cards border p-4 ' + (checkedById["11001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-11001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark S — Single Responsibility Principle (SRP) complete"}>
                  <input id="cpp-oop-complete-11001" type="checkbox" checked={Boolean(checkedById["11001"])} disabled={progressLoading} onChange={() => onToggle("11001", 11001, "S — Single Responsibility Principle (SRP)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"S — Single Responsibility Principle (SRP)"}</h3>
                    {checkedById["11001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"S — Single Responsibility Principle (SRP)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"A class should have only one reason to change, meaning it should be responsible for one well-defined job."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Keep unrelated responsibilities in separate classes."}</li>
                      <li className="whitespace-pre-wrap">{"Smaller, focused classes are easier to test and reuse."}</li>
                      <li className="whitespace-pre-wrap">{"Changing one concern should not force changes in another."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"Instead of one Report class that calculates data, formats it, and saves it to a file, use Report, ReportPrinter, and ReportSaver."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-11002" className={'rounded-cards border p-4 ' + (checkedById["11002"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-11002" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark O — Open/Closed Principle (OCP) complete"}>
                  <input id="cpp-oop-complete-11002" type="checkbox" checked={Boolean(checkedById["11002"])} disabled={progressLoading} onChange={() => onToggle("11002", 11002, "O — Open/Closed Principle (OCP)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"O — Open/Closed Principle (OCP)"}</h3>
                    {checkedById["11002"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"O — Open/Closed Principle (OCP)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Software entities should be open for extension but closed for modification: new behavior is added by writing new code, not by editing tested code."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"In C++ this is usually achieved with abstract base classes and virtual functions."}</li>
                      <li className="whitespace-pre-wrap">{"Avoids long if-else or switch chains that grow with every new type."}</li>
                      <li className="whitespace-pre-wrap">{"Reduces the risk of breaking existing, working code."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A Shape base class declares virtual area(); adding a Triangle class requires no change to the code that computes total area through Shape pointers."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-11003" className={'rounded-cards border p-4 ' + (checkedById["11003"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-11003" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark L — Liskov Substitution Principle (LSP) complete"}>
                  <input id="cpp-oop-complete-11003" type="checkbox" checked={Boolean(checkedById["11003"])} disabled={progressLoading} onChange={() => onToggle("11003", 11003, "L — Liskov Substitution Principle (LSP)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"L — Liskov Substitution Principle (LSP)"}</h3>
                    {checkedById["11003"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"L — Liskov Substitution Principle (LSP)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Objects of a derived class must be usable wherever the base class is expected, without breaking the program's correctness."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"A derived class should honor the contract of its base class."}</li>
                      <li className="whitespace-pre-wrap">{"Do not strengthen preconditions or weaken postconditions in an override."}</li>
                      <li className="whitespace-pre-wrap">{"If a derived class must throw 'not supported' for inherited behavior, the inheritance is probably wrong."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"If Square inherits from Rectangle but setting its width also changes its height, code written for Rectangle can behave incorrectly. This violates LSP."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-11004" className={'rounded-cards border p-4 ' + (checkedById["11004"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-11004" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark I — Interface Segregation Principle (ISP) complete"}>
                  <input id="cpp-oop-complete-11004" type="checkbox" checked={Boolean(checkedById["11004"])} disabled={progressLoading} onChange={() => onToggle("11004", 11004, "I — Interface Segregation Principle (ISP)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"I — Interface Segregation Principle (ISP)"}</h3>
                    {checkedById["11004"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"I — Interface Segregation Principle (ISP)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Clients should not be forced to depend on functions they do not use. Prefer several small, specific interfaces over one large one."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"In C++, interfaces are abstract classes with pure virtual functions."}</li>
                      <li className="whitespace-pre-wrap">{"Split 'fat' interfaces into smaller role-based ones."}</li>
                      <li className="whitespace-pre-wrap">{"Classes implement only the interfaces they actually need."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"Instead of one Machine interface with print(), scan(), and fax(), create Printer, Scanner, and Fax interfaces so a basic printer implements only Printer."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-11005" className={'rounded-cards border p-4 ' + (checkedById["11005"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-11005" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark D — Dependency Inversion Principle (DIP) complete"}>
                  <input id="cpp-oop-complete-11005" type="checkbox" checked={Boolean(checkedById["11005"])} disabled={progressLoading} onChange={() => onToggle("11005", 11005, "D — Dependency Inversion Principle (DIP)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"D — Dependency Inversion Principle (DIP)"}</h3>
                    {checkedById["11005"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"D — Dependency Inversion Principle (DIP)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"High-level modules should not depend on low-level modules. Both should depend on abstractions."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Depend on abstract classes or interfaces, not concrete classes."}</li>
                      <li className="whitespace-pre-wrap">{"Dependencies are commonly supplied from outside (dependency injection) through constructors."}</li>
                      <li className="whitespace-pre-wrap">{"Makes code loosely coupled and easier to test with mock objects."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A NotificationService holds a pointer to a Sender interface; EmailSender or SmsSender can be passed in without changing NotificationService."}</p>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"S = one class, one responsibility."}</li>
                <li className="whitespace-pre-wrap">{"O = extend by adding code, not by modifying existing code."}</li>
                <li className="whitespace-pre-wrap">{"L = derived objects must be safely substitutable for base objects."}</li>
                <li className="whitespace-pre-wrap">{"I = many small interfaces beat one large interface."}</li>
                <li className="whitespace-pre-wrap">{"D = depend on abstractions, not concrete classes."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
      <article className="border-b border-graphite last:border-b-0">
        <header className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">Main section 12</p>
            <h2 className="mt-1 text-lg font-medium text-white">{"Design Patterns"}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{"Design patterns are proven, reusable solutions to common software design problems. They are templates for structuring classes and objects, not ready-made code."}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right text-xs text-medium-gray">
              <div>{completed11}/9</div>
              <div>{Math.round((completed11 / 9) * 100)}%</div>
            </div>
            <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
              <div className="h-full rounded-full bg-white transition-[width]" style={{ width: Math.round((completed11 / 9) * 100) + "%" }} />
            </div>
            <button type="button" aria-label={expandedTopics[11] ? "Collapse Design Patterns" : "Expand Design Patterns"} aria-expanded={Boolean(expandedTopics[11])} aria-controls="static-oop-topic-11" onClick={() => setExpandedTopics((current) => ({ ...current, [11]: !current[11] }))} className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {expandedTopics[11] ? <ChevronDown className="size-4 text-white" aria-hidden="true" /> : <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />}
            </button>
          </div>
        </header>
        <div id="static-oop-topic-11" hidden={!expandedTopics[11]} className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4">
          {expandedTopics[11] ? <>
            <article id="resource-cpp-oop-complete-12001" className={'rounded-cards border p-4 ' + (checkedById["12001"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12001" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark What are design patterns? complete"}>
                  <input id="cpp-oop-complete-12001" type="checkbox" checked={Boolean(checkedById["12001"])} disabled={progressLoading} onChange={() => onToggle("12001", 12001, "What are design patterns?")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"What are design patterns?"}</h3>
                    {checkedById["12001"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"What are design patterns?"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"A design pattern describes a general solution to a recurring design problem. The best-known catalogue of 23 patterns comes from the 'Gang of Four' (GoF) book."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"They give developers a shared vocabulary, such as 'use a Singleton' or 'use an Observer'."}</li>
                      <li className="whitespace-pre-wrap">{"They apply OOP concepts such as abstraction, inheritance, polymorphism, and composition."}</li>
                      <li className="whitespace-pre-wrap">{"Patterns are guidelines; they must be adapted to the problem and should not be forced."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12002" className={'rounded-cards border p-4 ' + (checkedById["12002"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12002" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Categories of design patterns complete"}>
                  <input id="cpp-oop-complete-12002" type="checkbox" checked={Boolean(checkedById["12002"])} disabled={progressLoading} onChange={() => onToggle("12002", 12002, "Categories of design patterns")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Categories of design patterns"}</h3>
                    {checkedById["12002"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Categories of design patterns"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"GoF patterns are grouped into three categories based on the kind of problem they solve."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Creational: deal with object creation. Examples: Singleton, Factory Method, Builder, Prototype, Abstract Factory."}</li>
                      <li className="whitespace-pre-wrap">{"Structural: deal with how classes and objects are composed. Examples: Adapter, Decorator, Facade, Proxy, Composite."}</li>
                      <li className="whitespace-pre-wrap">{"Behavioral: deal with communication and responsibility between objects. Examples: Observer, Strategy, Command, State, Iterator."}</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12003" className={'rounded-cards border p-4 ' + (checkedById["12003"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12003" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Singleton (Creational) complete"}>
                  <input id="cpp-oop-complete-12003" type="checkbox" checked={Boolean(checkedById["12003"])} disabled={progressLoading} onChange={() => onToggle("12003", 12003, "Singleton (Creational)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Singleton (Creational)"}</h3>
                    {checkedById["12003"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Singleton (Creational)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Singleton ensures that a class has only one instance and provides a global access point to it."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Make the constructor private and delete the copy constructor and assignment operator."}</li>
                      <li className="whitespace-pre-wrap">{"Provide a static function, such as getInstance(), that returns the single instance."}</li>
                      <li className="whitespace-pre-wrap">{"A function-local static instance is thread-safe to initialize in C++11 and later."}</li>
                      <li className="whitespace-pre-wrap">{"Use sparingly: it behaves like a global variable and can make testing harder."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A Logger or configuration manager that the whole application shares."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12004" className={'rounded-cards border p-4 ' + (checkedById["12004"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12004" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Factory Method (Creational) complete"}>
                  <input id="cpp-oop-complete-12004" type="checkbox" checked={Boolean(checkedById["12004"])} disabled={progressLoading} onChange={() => onToggle("12004", 12004, "Factory Method (Creational)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Factory Method (Creational)"}</h3>
                    {checkedById["12004"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Factory Method (Creational)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Factory Method defines an interface for creating an object, but lets subclasses or a factory function decide which concrete class to instantiate."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Client code depends on the abstract product, not on concrete classes."}</li>
                      <li className="whitespace-pre-wrap">{"Supports the Open/Closed Principle: new products can be added without changing client code."}</li>
                      <li className="whitespace-pre-wrap">{"Usually returns a smart pointer such as std::unique_ptr to the base type."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A ShapeFactory returns a Circle or Rectangle object as a Shape depending on the requested type."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12005" className={'rounded-cards border p-4 ' + (checkedById["12005"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12005" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Builder (Creational) complete"}>
                  <input id="cpp-oop-complete-12005" type="checkbox" checked={Boolean(checkedById["12005"])} disabled={progressLoading} onChange={() => onToggle("12005", 12005, "Builder (Creational)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Builder (Creational)"}</h3>
                    {checkedById["12005"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Builder (Creational)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Builder separates the construction of a complex object from its representation, so the same process can create different results."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Useful when an object has many optional parameters."}</li>
                      <li className="whitespace-pre-wrap">{"Avoids constructors with long parameter lists."}</li>
                      <li className="whitespace-pre-wrap">{"Often implemented with chained setter calls followed by build()."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"Building a Pizza step by step by choosing size, crust, and toppings."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12006" className={'rounded-cards border p-4 ' + (checkedById["12006"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12006" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Adapter (Structural) complete"}>
                  <input id="cpp-oop-complete-12006" type="checkbox" checked={Boolean(checkedById["12006"])} disabled={progressLoading} onChange={() => onToggle("12006", 12006, "Adapter (Structural)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Adapter (Structural)"}</h3>
                    {checkedById["12006"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Adapter (Structural)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Adapter converts the interface of an existing class into the interface that the client expects, so incompatible classes can work together."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Wraps the existing (adaptee) class."}</li>
                      <li className="whitespace-pre-wrap">{"Lets you reuse old or third-party code without modifying it."}</li>
                      <li className="whitespace-pre-wrap">{"Often implemented with composition."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A new PaymentProcessor interface is satisfied by an adapter that wraps an older payment library."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12007" className={'rounded-cards border p-4 ' + (checkedById["12007"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12007" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Decorator (Structural) complete"}>
                  <input id="cpp-oop-complete-12007" type="checkbox" checked={Boolean(checkedById["12007"])} disabled={progressLoading} onChange={() => onToggle("12007", 12007, "Decorator (Structural)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Decorator (Structural)"}</h3>
                    {checkedById["12007"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Decorator (Structural)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Decorator adds new behavior to an object dynamically by wrapping it, without changing its class."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"The decorator and the wrapped object share the same interface."}</li>
                      <li className="whitespace-pre-wrap">{"Decorators can be stacked to combine behaviors."}</li>
                      <li className="whitespace-pre-wrap">{"A flexible alternative to creating many subclasses."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A Coffee object wrapped by MilkDecorator and then SugarDecorator, each adding to the cost and description."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12008" className={'rounded-cards border p-4 ' + (checkedById["12008"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12008" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Observer (Behavioral) complete"}>
                  <input id="cpp-oop-complete-12008" type="checkbox" checked={Boolean(checkedById["12008"])} disabled={progressLoading} onChange={() => onToggle("12008", 12008, "Observer (Behavioral)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Observer (Behavioral)"}</h3>
                    {checkedById["12008"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Observer (Behavioral)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Observer defines a one-to-many dependency: when one object (the subject) changes state, all its registered observers are notified automatically."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"Subject keeps a list of observers and provides attach and detach functions."}</li>
                      <li className="whitespace-pre-wrap">{"Observers implement a common update() interface."}</li>
                      <li className="whitespace-pre-wrap">{"Subject and observers are loosely coupled."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A weather station notifies phone displays and web dashboards whenever the temperature changes."}</p>
                  </section>
                </div>
              </div>
            </article>
            <article id="resource-cpp-oop-complete-12009" className={'rounded-cards border p-4 ' + (checkedById["12009"] ? 'border-white/10 bg-white/[0.02]' : 'border-graphite bg-surface')}>
              <div className="flex items-start gap-3">
                <label htmlFor="cpp-oop-complete-12009" className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center" aria-label={"Mark Strategy (Behavioral) complete"}>
                  <input id="cpp-oop-complete-12009" type="checkbox" checked={Boolean(checkedById["12009"])} disabled={progressLoading} onChange={() => onToggle("12009", 12009, "Strategy (Behavioral)")} className="peer sr-only" />
                  <span aria-hidden="true" className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white" />
                </label>
                <div className="min-w-0 flex-1">
                  <header className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium text-bright-gray">{"Strategy (Behavioral)"}</h3>
                    {checkedById["12009"] ? <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray"><Check className="size-3" /> Complete</span> : null}
                  </header>
                  <section aria-label={"Strategy (Behavioral)"} className="mt-3 space-y-3">
                    <p className="whitespace-pre-wrap text-sm leading-7 text-medium-gray">{"Strategy defines a family of interchangeable algorithms, puts each in its own class, and lets the client choose one at run time."}</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                      <li className="whitespace-pre-wrap">{"The context holds a pointer to a Strategy interface and delegates the work to it."}</li>
                      <li className="whitespace-pre-wrap">{"Replaces large if-else or switch blocks that select an algorithm."}</li>
                      <li className="whitespace-pre-wrap">{"Follows the Open/Closed and Dependency Inversion principles."}</li>
                    </ul>
                    <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray"><span className="font-medium text-bright-gray">Example: </span>{"A Sorter class that can use BubbleSort, QuickSort, or MergeSort strategies depending on the data."}</p>
                  </section>
                </div>
              </div>
            </article>
            <aside className="rounded-cards border border-graphite bg-surface p-4">
              <h3 className="text-sm font-semibold text-white">Quick revision</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                <li className="whitespace-pre-wrap">{"Design pattern = reusable solution to a common design problem."}</li>
                <li className="whitespace-pre-wrap">{"Creational (creating objects), Structural (composing objects), Behavioral (object interaction)."}</li>
                <li className="whitespace-pre-wrap">{"Singleton = one instance; Factory Method = create without naming the concrete class; Builder = step-by-step construction."}</li>
                <li className="whitespace-pre-wrap">{"Adapter = convert interfaces; Decorator = add behavior by wrapping."}</li>
                <li className="whitespace-pre-wrap">{"Observer = notify dependents on change; Strategy = swap algorithms at run time."}</li>
              </ul>
            </aside>
          </> : null}
        </div>
      </article>
    </section>
  );
}
