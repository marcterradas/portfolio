import ProjectsLinks from "@/infrastructure/constants/projectsLinks.json";
import WorkDates from "@/infrastructure/constants/dates.json";
import ContactLinks from "@/infrastructure/constants/contactLinks.json";
import Skills from "@/infrastructure/constants/skills";
import Documents from "@/infrastructure/constants/documents.json";
import Languages from "@/infrastructure/constants/languages.json";
import ProjectsInformation from "@/infrastructure/constants/projects.json";

/**
 * @param {string} projectKey
 * @returns {string | undefined}
 */
export function getProjectLink(projectKey) {
  return ProjectsLinks[projectKey];
}

/**
 * @param {string} work
 * @returns {string | undefined}
 */
export function getWorkDates(work) {
  return WorkDates[work];
}

/**
 * @param {string} contactLink
 * @returns {string | undefined}
 */
export function getContactLink(contactLink) {
  return ContactLinks[contactLink];
}

/**
 * @returns {Object}
 */
export function getSkills() {
  return Skills;
}

/**
 * @param {string} document
 * @returns {string | undefined}
 */
export function getDocumentLink(document) {
  return Documents[document];
}

/**
 * @param {string} language
 * @returns {string | undefined}
 */
export function getLanguage(language) {
  return Languages[language];
}

/**
 * @param {string} project
 * @returns {Object | undefined}
 */
export function getProjectInformation(project) {
  return ProjectsInformation[project];
}
