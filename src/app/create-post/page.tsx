import { CreatePostForm } from "@/modules/create-post/create-post";
import { Container } from "@/shared/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Создание поста",
};

const CreatePost = () => {
  return (
    <section className="pt-10 pb-20 px-4 mt-(--header-height) grow">
      <Container>
        <CreatePostForm />
      </Container>
    </section>
  );
};

export default CreatePost;
