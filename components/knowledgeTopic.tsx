type KnowledgeTopicProps = {
  title: string
  // imgSrc: string
}

export function KnowledgeTopic(props: KnowledgeTopicProps) {
  return (
    <div className="knowledge-topic">
      {props.title}
    </div>
  );
}
