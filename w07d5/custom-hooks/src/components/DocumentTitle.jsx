// import {useEffect} from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  // const title = 'Welcome to our Site!';

  useDocumentTitle('Any title we want');

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  return (
    <div>
      <h2>DocumentTitle Component</h2>
    </div>
  );
};

export default DocumentTitle;
