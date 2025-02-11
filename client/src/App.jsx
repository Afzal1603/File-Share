import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import { Copy } from "lucide-react";
const App = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const inputRef = useRef(null);
  const onUpload = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        console.log(response);
        if (response) {
          toast.success("File uploaded successfully");
        } else {
          toast.error("Error uploading file");
        }
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Hide message after 2 seconds
    });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-zinc-900 to-zinc-600 font-mono">
      <div className="bg-white/30 mx-8 min-h-64 h-auto w-xl sm:min-w-xl sm:max-w-3xl  backdrop-blur-sm rounded-md flex flex-col items-center gap-4 px-6 py-5">
        <h1 className="text-center mt-2 mb-3 text-4xl font-bold font-mono ">
          Simple File Sharing
        </h1>
        <p className="font-bold text-center ">
          Upload files and share them with others
        </p>
        <button
          onClick={() => onUpload()}
          className="mb-2 bg-zinc-600 px-8 py-2.5 rounded-md font-bold hover:bg-zinc-400 hover:cursor-pointer hover:outline-1 hover:outline-zinc-900 "
        >
          Upload
        </button>
        <input
          ref={inputRef}
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
          type="file"
        />
        {result && (
          <div className="flex items-center gap-2">
            <a
              className="text-cyan-300 break-all text-sm"
              target="_blank"
              href={result}
            >
              {result}
            </a>
            <button
              onClick={copyToClipboard}
              className=" text-white  h-auto py-1 rounded-md hover:text-green-500 hover:cursor-pointer"
            >
              <Copy />
            </button>
          </div>
        )}
        {copySuccess && (
          <p className="text-green-400 text-sm mt-[-15px]">Copied!</p>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
