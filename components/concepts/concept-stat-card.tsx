import { ConceptStat }
from "@/types/concept-stat"
import Link from 'next/link'

type Props = {
  stat: ConceptStat
}

export function ConceptStatCard({
  stat,
}: Props) {
  return (
    <Link
  href={`/my-concepts/${stat.concept}`}
>
      <div
      className="
        rounded-xl
        border
        p-4
      "
    >
      <h3>
        {stat.concept}
      </h3>

      <p>
        {stat.reflectionsCount}
        {" "}
        reflections
      </p>
    </div>
</Link>
  
  )
}