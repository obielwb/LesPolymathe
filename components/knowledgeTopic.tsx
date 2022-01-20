type KnowledgeTopicProps = {
  topic: string
  // imgSrc: string
}

export function KnowledgeTopic(props: KnowledgeTopicProps) {
  return (
    <div className="knowledge-topic">
      {props.topic}
    </div>
  );
}
