import { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import absoluteUrl from "next-absolute-url";
import toast from "react-hot-toast";
import { API } from "./../utils/api";

interface PROJECT {
  id: string;
  name: string;
  desc: string;
  repo_url: string;
  image_url: string;
}

interface STATE {
  theme: string;
  userData: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      picture: string;
    };
  };
}

export default function Project({ data }: any) {
  const { userData } = useSelector((state: STATE) => state);
  const [projects, setProjects] = useState(data);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    repo_url: "",
    image_url: "",
  });
  const { name, desc, repo_url, image_url } = form;
  // handle form change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // handle form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await API.post("/projects", {
      name,
      desc,
      repo_url,
      image_url,
    });
    if (res.status === 201) {
      toast.success("Project added successfully!");
      setProjects([...projects, form]);
      setForm({
        name: "",
        desc: "",
        repo_url: "",
        image_url: "",
      });
    }
  };
  return (
    <>
      <div className="my-8 container">
        <h1 className="text-4xl md:text-6xl dark:text-gray-200 font-thin my-2">
          Projects
        </h1>
        <p className="md:text-lg text-gray-600 dark:text-gray-400">
          This is my projects or portfolio what I have done so far. I have
          pretty some projects and I am always looking for new ones.
        </p>
        {userData.user && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-2 my-4">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="desc"
                  value={desc}
                  onChange={handleChange}
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                />
                <label
                  htmlFor="desc"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Description
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="image_url"
                  value={image_url}
                  onChange={handleChange}
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                />
                <label
                  htmlFor="image_url"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Image URL
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="repo_url"
                  value={repo_url}
                  onChange={handleChange}
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                />
                <label
                  htmlFor="repo_url"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Repo URL
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm p-1 mb-auto dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 focus:outline-none dark:focus:ring-fuchsia-800"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project: PROJECT) => (
              <Link href={project.repo_url} key={project.id}>
                <a className="relative h-48 md:h-72 group" target="_blank">
                  <div className="absolute -z-10">
                    <Image
                      src={project.image_url}
                      width={500}
                      height={300}
                      objectFit="contain"
                      alt="project"
                      className="rounded bg-white transition ease-in-out duration-300 group-hover:brightness-75 shadow-2xl"
                    />
                    <div className="absolute top-0 h-full w-full rounded bg-gradient-to-b from-transparent via-slate-800 to-black opacity-60 transition ease-in-out duration-300"></div>
                    <div className="absolute bottom-0 right-0 text-right text-white p-8">
                      <h3 className="text-2xl md:text-4xl">{project.name}</h3>
                      <p className="text-xs md:text-sm text-gray-300">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const res = await fetch(`${origin}/api/projects`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
