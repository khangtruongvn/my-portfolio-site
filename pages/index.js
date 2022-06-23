import { getInfomation } from 'apis';
import Layout from 'khang-components/layouts';
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('khang-components/modules/Banner'), { ssr: true });
const About = dynamic(() => import('khang-components/modules/About'), { ssr: true });
const Projects = dynamic(() => import('khang-components/modules/Projects'), { ssr: true });
const Contact = dynamic(() => import('khang-components/modules/Contact'), { ssr: true });

export const getStaticProps = async () => {
  const infomation = await getInfomation();
  return {
    props: {
      data: infomation.data,
    },
  };
};

export default function Home({data}) {

  return (
    <Layout>
      <Banner data={data} />
      <About data={data} />
      <Projects data={data} />
      <Contact message={data?.message.contact} />
    </Layout>
  );
}
