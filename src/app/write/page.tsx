import Page from "@/components/Layout/Page";
import { Title } from "@/components/editor/Title";
import Editor from "@/components/editor/Editor";
import ContentEditableComponent from "@/components/test";

export default async function page() {
  return (
    <Page className={"block"}>
      <Title />
      <Editor />
      <ContentEditableComponent />
    </Page>
  );
}
