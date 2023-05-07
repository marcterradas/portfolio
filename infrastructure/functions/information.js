import ProjectsLinks from "@/constants/projectsLinks.json";
import WorkDates from "@/constants/dates.json";
import contactLinks from "@/constants/contactLinks.json";
import Skills from "@/constants/skills";
import Documents from "@/constants/documents.json";
import Languages from "@/constants/languages.json";
import ProjectsInformation from "@/constants/projects.json";

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
  return contactLinks[contactLink];
}

/**
 * @returns {Object}
 */
export function getSkills() {
  return Skills;
}

/**
 * @param {string} contactLink
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
