import HeadLayout from "../components/headLayout";
import { getSortedPartyData} from "../lib/parties"

export default function Search({ partData}) {
    return (
        <HeadLayout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
        </HeadLayout>
    )
}

export async function getStaticProps() {
    const data = getSortedPartyData

    return {
        props: partData
    }
}