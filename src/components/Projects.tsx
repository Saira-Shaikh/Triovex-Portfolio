import { useState } from "react";
import type { ElementType } from "react";
import {
  ExternalLink,
  Palette,
  Globe,
  Smartphone,
  Bot,
  Server,
  ArrowRight,
  ArrowLeft,
  Images,
  Figma,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "../components/ui/button";
import Diagram from "./Diagram";
import { projects, earlierProjects, type Project } from "../data/projects";

/* =========================================================
   CATEGORY
========================================================= */

type Category = {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  match: string[];
  exclude?: string[];
};

const categories: Category[] = [
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-focused interfaces and digital experiences",
    icon: Palette,
    match: ["UI/UX Design", "Web / UI/UX", "Web / UI Implementation"],
    exclude: ["Video Sharing Platform"],
  },

  {
    id: "web",
    title: "Web Development",
    description: "Responsive websites and modern web applications",
    icon: Globe,
    match: ["Web Development", "Web / UI Implementation", "Web / UI/UX"],
  },

  {
    id: "mobile",
    title: "Mobile Development",
    description: "Flutter applications for Android and mobile platforms",
    icon: Smartphone,
    match: [
      "Mobile Development",
      "Mobile / AI / ML",
      "Mobile / Firebase",
      "Mobile / Web / Backend",
    ],
  },

  {
    id: "ai",
    title: "AI / ML",
    description: "AI agents, RAG systems and intelligent applications",
    icon: Bot,
    match: [
      "AI / RAG",
      "AI / Backend",
      "AI / Web / Backend",
      "Mobile / AI / ML",
    ],
  },

  {
    id: "backend",
    title: "Backend & APIs",
    description: "APIs, server-side systems and backend engineering",
    icon: Server,
    match: [
      "Backend / Enterprise",
      "Backend / Database",
      "Backend / Data",
      "AI / Backend",
      "AI / Web / Backend",
      "Mobile / Web / Backend",
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

const isMobileProject = (project: Project) => {
  return (
    project.tag.toLowerCase().includes("mobile") ||
    ["scamshield", "chitchatz", "forewell", "ivy-learning-ui"].includes(
      project.id.toLowerCase(),
    )
  );
};

/*
 * IMPORTANT:
 * A project is assigned to ONLY ONE category.
 *
 * Categories are checked in this order.
 * Once a project is assigned, it cannot appear
 * in another category.
 */
const getProjectCategory = (project: Project) => {
  for (const category of categories) {
    const matches = category.match.includes(project.tag);
    const excluded = category.exclude?.includes(project.title) ?? false;

    if (matches && !excluded) {
      return category.id;
    }
  }

  return null;
};

const getFilteredProjects = (category: Category) => {
  return projects.filter(
    (project) => getProjectCategory(project) === category.id,
  );
};

/*
 * Remove projects from Earlier Projects if they already
 * exist in the main projects list.
 */
const visibleEarlierProjects = earlierProjects.filter(
  (earlierProject) =>
    !projects.some((project) => project.title === earlierProject.title),
);

/* =========================================================
   CONTENT BLOCK
========================================================= */

const Block = ({ label, children }: { label: string; children: string }) => (
  <div>
    <h4 className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
      {label}
    </h4>

    <p className="text-gray-300 leading-relaxed">{children}</p>
  </div>
);

/* =========================================================
   PROJECT GALLERY
========================================================= */

const ProjectGallery = ({ project }: { project: Project }) => {
  const images = project.photosrc ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const previousImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="w-full">
      {/* Gallery header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Images className="w-4 h-4 text-cyan-400" />

          <h4 className="text-xs uppercase tracking-wider text-cyan-400">
            Screens & Preview
          </h4>
        </div>

        {images.length > 1 && (
          <span className="text-xs text-gray-500">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>

      {/* SINGLE IMAGE BOX */}
      <div className="relative w-full rounded-xl border border-gray-700/60 bg-black/50 overflow-hidden flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
        <img
          src={images[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          className="max-w-full max-h-[520px] w-auto h-auto object-contain"
          loading="lazy"
        />

        {/* Previous */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-blue-400"
                  : "w-1.5 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* =========================================================
   THUMBNAIL
========================================================= */

const ProjectThumbnail = ({ project }: { project: Project }) => {
  if (!project.thumbnail) {
    return null;
  }
  const mobile = isMobileProject(project);

  return (
    <div
      className={
        mobile
          ? "w-[220px] h-[390px] mx-auto rounded-2xl overflow-hidden border border-gray-700/60 bg-black/70 flex items-center justify-center shadow-xl"
          : "w-full rounded-xl overflow-hidden border border-gray-700/60 bg-black/40"
      }
    >
      <img
        src={project.thumbnail}
        alt={`${project.title} preview`}
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
  );
};

/* =========================================================
   VIDEO
========================================================= */

const ProjectVideo = ({ project }: { project: Project }) => {
  if (!project.videoSrc) {
    return null;
  }

  const mobile = isMobileProject(project);

  return (
    <div className={mobile ? "w-full h-[450px] flex justify-center" : "w-full"}>
      <video
        controls
        muted
        playsInline
        preload="metadata"
        poster={project.thumbnail}
        src={project.videoSrc}
        className={
          mobile
            ? "max-h-[620px] w-auto max-w-full rounded-xl border border-gray-700/60 bg-black object-contain"
            : "w-full h-auto max-h-[620px] rounded-xl border border-gray-700/60 bg-black object-contain"
        }
      />
    </div>
  );
};

/* =========================================================
   MEDIA
========================================================= */

const ProjectMedia = ({ project }: { project: Project }) => {
  return (
    <div className="w-full">
      {project.videoSrc ? (
        <ProjectVideo project={project} />
      ) : project.thumbnail ? (
        <ProjectThumbnail project={project} />
      ) : project.photosrc?.length ? (
        <ProjectGallery project={project} />
      ) : null}
    </div>
  );
};

/* =========================================================
   FIGMA LINKS
========================================================= */

const FigmaLinks = ({ project }: { project: Project }) => {
  if (!project.figmaprotoUrl?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3 mt-7">
      {project.figmaprotoUrl.map((url, index) => (
        <Button
          key={`${url}-${index}`}
          asChild
          size="sm"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Figma className="mr-2 h-4 w-4" />

            {project.figmaprotoUrl!.length > 1
              ? `Figma Prototype ${index + 1}`
              : "View Figma Prototype"}
          </a>
        </Button>
      ))}
    </div>
  );
};

/* =========================================================
   PROJECT LINKS
========================================================= */

const ProjectLinks = ({ project }: { project: Project }) => {
  if (
    !project.liveUrl &&
    !project.githubbackendUrl &&
    !project.githubfrontendUrl
  ) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {project.liveUrl && (
        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live
          </a>
        </Button>
      )}

      {project.githubbackendUrl && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          <a
            href={project.githubbackendUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Backend
          </a>
        </Button>
      )}

      {project.githubfrontendUrl && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          <a
            href={project.githubfrontendUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Frontend
          </a>
        </Button>
      )}
    </div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col lg:flex-row gap-8 lg:gap-10">
      {/* LEFT SIDE: MEDIA */}
      {(project.videoSrc || project.thumbnail || project.photosrc?.length) && (
        <div className="w-full lg:w-[45%] shrink-0">
          <ProjectMedia project={project} />
        </div>
      )}

      {/* RIGHT SIDE: CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TITLE */}
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
          <span className="text-sm font-medium text-blue-400">
            {project.tag}
          </span>
        </div>

        {/* SUMMARY */}
        <p className="text-lg text-gray-200 mb-6 leading-relaxed">
          {project.summary}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-6">
          <Block label="Problem">{project.problem}</Block>
          <Block label="Approach">{project.approach}</Block>
          <Block label="Outcome">{project.outcome}</Block>
        </div>

        {/* EXTRA PROJECT DETAILS */}
        {project.videoSrc && project.photosrc?.length && (
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <ProjectGallery project={project} />
          </div>
        )}

        {/* ARCHITECTURE */}
        {project.diagram && (
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <h4 className="text-xs uppercase tracking-wider text-cyan-400 mb-5">
              Architecture
            </h4>
            <Diagram diagram={project.diagram} />
          </div>
        )}

        {/* FIGMA */}
        <FigmaLinks project={project} />

        {/* LINKS */}
        <div className="mt-auto pt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

/* =========================================================
   PROJECTS
========================================================= */

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const filteredProjects = selectedCategory
    ? getFilteredProjects(selectedCategory)
    : [];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section id="projects" className="py-20 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Selected <span className="text-blue-400">Work</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our work across design, development, AI, mobile
              applications, and enterprise systems.
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6" />
          </div>

          {/* CATEGORY VIEW */}
          {!selectedCategory ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const count = getFilteredProjects(category).length;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category)}
                      className="group text-left bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-7 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {category.title}
                          </h3>

                          <p className="text-sm text-gray-400 leading-relaxed">
                            {category.description}
                          </p>
                        </div>

                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-700/50">
                        <span className="text-xs uppercase tracking-wider text-gray-500">
                          {count} {count === 1 ? "Project" : "Projects"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* EARLIER PROJECTS */}
              {visibleEarlierProjects.length > 0 && (
                <div className="mt-20 pt-10 border-t border-gray-700/50">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-5">
                    Earlier Projects
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {visibleEarlierProjects.map((p) => (
                      <div
                        key={p.title}
                        className="border border-gray-700/50 rounded-lg p-4 flex flex-wrap items-center justify-between gap-3"
                      >
                        <div>
                          <p className="text-white font-medium">{p.title}</p>
                          <p className="text-gray-500 text-sm">{p.tech}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* CATEGORY HEADER */}
              <div className="mb-10">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to categories
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {(() => {
                      const Icon = selectedCategory.icon;
                      return <Icon className="w-6 h-6 text-blue-400" />;
                    })()}
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {selectedCategory.title}
                    </h3>
                    <p className="text-gray-400 mt-1">
                      {selectedCategory.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* SINGLE PROJECT ROW CONTAINER */}
              <div className="flex flex-col gap-12">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                  No projects available in this category.
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
