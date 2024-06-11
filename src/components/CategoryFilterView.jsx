import useFetch from "../hooks/useFetch";

const CategoryFilterView = () => {
  const { data } = useFetch(
    "https://4c7ed629-ffb2-449c-83b8-7974797d0510-00-2b5gxma3p76yy.sisko.replit.dev/api/categories"
  );

  return <div>CategoryFilterView</div>;
};

export default CategoryFilterView;
