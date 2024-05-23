import { useState, useEffect } from "react";
import { X, Loader } from "lucide-react";
import slugify from "slugify";
import { toast } from "react-toastify";

export default function NewPostModal({ session, showModal, setShowModal }) {
  const [isMounted, setIsMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    creatorEmail: "",
    name: "",
    category: "",
    link: "",
    slug: "",
    description: "",
    totalLikes: 0,
  });

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setIsMounted(true);
      }, 50);
    }
    if (hidden) {
      setTimeout(() => {
        setIsMounted(false);
        setShowModal(false);
      }, 600);
    }
  }, [setShowModal, showModal, isMounted, hidden]);

  const submitPost = async () => {
    try {
      setIsLoading(true);

      setData({
        ...data,
        slug: generateSlug(data.name),
        creatorEmail: session.data.user.email,
        submitDate: new Date(),
      });
      // console.log(data);
      const res = await fetch("/api/post-new-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status >= "200" && res.status < "300") {
        setHidden(true);
        toast.success("Your project is live.", { position: "top-center" });
      } else {
        toast.error(`Something went wrong. Error: ${res.status}`, {
          position: "top-center",
        });
      }
    } catch (e) {
      toast.error("An error has occurred.", { position: "top-center" });
    } finally {
      setIsLoading(false);
    }
  };

  function generateSlug(projName) {
    // check if slug exists
    return slugify(projName, { lower: true, strict: true });
  }

  return (
    <>
      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-700 ${
            !hidden ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`fixed inset-0 bg-gray-900 transition-opacity duration-600 ${
              !hidden ? "opacity-70 " : "opacity-0"
            }`}
          ></div>

          <div className="bg-white w-11/12 md:max-w-xl mx-auto rounded-tr-[40px] rounded-lg shadow-lg z-50 overflow-y-auto">
            <div id="modal-content" className="py-8 text-left px-6">
              <div
                id="modal-header"
                className="flex justify-between items-center pb-3"
              >
                <h2 className="text-lg font-bold text-gray-700">New Post</h2>
                <button
                  onClick={() => setHidden(true)}
                  className="text-gray-400 hover:text-gray-800 transition-all"
                >
                  <X />
                </button>
              </div>

              <div className="text-gray-700 flex flex-col">
                <div className="flex items-center">
                  <label htmlFor="project-name" className="mr-2 w-1/3">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="project-name"
                    placeholder="Enter your project name"
                    value={data["name"]}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className={`border border-2 border-gray-200 rounded-lg px-2 outline-none w-2/3 ${isLoading}`}
                    disabled={isLoading}
                  />
                </div>

                <div className="flex items-center mt-4">
                  <label htmlFor="category" className="mr-2 w-1/3">
                    Category Name
                  </label>
                  <select
                    id="category"
                    onChange={(e) =>
                      setData({ ...data, category: e.target.value })
                    }
                    className="border border-2 border-gray-200 rounded-lg px-2 outline-none w-2/3"
                  >
                    <option value="">Select a category</option>
                    <option value="productivity">Productivity</option>
                    <option value="game">Game</option>
                    <option value="devtool">DevTool</option>
                  </select>
                </div>

                <div className="flex items-center mt-4">
                  <label htmlFor="github-link" className="mr-2 w-1/3">
                    Github Link
                  </label>
                  <input
                    type="text"
                    id="github-link"
                    placeholder="https://github.com/denver-edwards/OpenChannels"
                    value={data["link"]}
                    onChange={(e) => setData({ ...data, link: e.target.value })}
                    className="border border-2 border-gray-200 rounded-lg px-2 outline-none w-2/3"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="flex items-center mt-4">
                <label htmlFor="summary" className="mr-2 w-1/3">
                  Short Description
                </label>
                <input
                  type="text"
                  id="description"
                  placeholder="Give a simple explanation of your project"
                  value={data["description"]}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  className="border border-2 border-gray-200 rounded-lg px-2 outline-none w-2/3"
                  disabled={isLoading}
                />
              </div>

              <button
                className={`flex transition-all shadow-xl hover:shadow-md rounded-xl mt-6 px-4 py-2 text-white text-center mx-auto ${
                  isLoading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-800"
                }`}
                onClick={submitPost}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Share with the world!"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
