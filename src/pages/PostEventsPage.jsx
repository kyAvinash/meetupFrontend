import Header from "../components/Header";
import Footer from "../components/Footer";

import AddEventsForm from "../components/AddEventsForm";

const PostEventsPage = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <AddEventsForm />
      </main>
      <Footer />
    </>
  );
};
export default PostEventsPage;
