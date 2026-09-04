import { useTranslation } from 'react-i18next'
import { FiFolder } from 'react-icons/fi'
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../data/projects'
import { CompactProjectCard, FeaturedProjectCard } from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        icon={<FiFolder size={18} />}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-faint">
        {t('projects.featured')}
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {FEATURED_PROJECTS.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      <h3 className="mb-6 mt-16 text-sm font-semibold uppercase tracking-wider text-faint">
        {t('projects.more')}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OTHER_PROJECTS.map((project, index) => (
          <CompactProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
