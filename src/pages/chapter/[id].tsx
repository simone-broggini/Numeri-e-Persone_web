import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout';
import ChapterRenderer from '../../components/ChapterRenderer';

export default function ChapterPage({ chapterData }: { chapterData: any }) {
  if (!chapterData) return <div>Loading...</div>;

  return (
    <Layout>
      <Head>
        <title>Capitolo {chapterData.chapter} | Zio Book</title>
      </Head>
      <ChapterRenderer data={chapterData} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for chapters 1 to 8
  const paths = Array.from({ length: 8 }, (_, i) => ({
    params: { id: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const filePath = path.join(process.cwd(), 'src/data', `chapter_${id}.json`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const chapterData = JSON.parse(fileContent);

    return {
      props: {
        chapterData,
      },
    };
  } catch (error) {
    console.error(`Error loading chapter ${id}:`, error);
    return { notFound: true };
  }
};
