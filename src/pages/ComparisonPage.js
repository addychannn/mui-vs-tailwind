import React from "react";

const ButtonIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "80%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        animation: "moveImage 3s infinite alternate",
      }}
    >
      <img src="/button.png" alt="Moving Image" />
    </div>
  );
};

const AvatarIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "80%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite",
      }}
    >
      <img src="/Avatar.png" alt="Moving Image" />
    </div>
  );
};

const CheckboxIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "80%",
        right: "80%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite",
      }}
    >
      <img src="/Checkbox.png" alt="Moving Image" />
    </div>
  );
};

const Snackbar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "60%",
        transform: "translate(-50%, -50%)",
        animation: "moveImage 3s infinite alternate",
      }}
    >
      <img src="/Snackbar.png" alt="Moving Image" />
    </div>
  );
};

export const ComparisonPage = () => {
  return (
    <>
      <style>
        {`
          @keyframes moveImage {
            0% { transform: translate(-50%, -50%); }
            100% { transform: translate(-50%, 0); }
          }
        `}
      </style>
      <section
        className="flex items-center justify-center h-screen"
        style={{
          backgroundImage: `url('../bg2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ButtonIcon />
        <AvatarIcon />
        <CheckboxIcon />
        <Snackbar />
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="grid gap-4 mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="\MUILogo.png"
                    style={{ width: "80px", height: "80px" }}
                    className="mx-auto" // Added class to center the image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Material UI
                </h3>

                <p className="my-4">
                  Material UI is a lot better for web applications that don’t
                  necessarily need to be indexed high on Google.
                </p>
                <p className="my-4">
                  Go-to framework when we’re developing SaaS applications and
                  dashboards.
                </p>
                <p className="my-4">
                  Provides powerful theming features to allow for easy
                  customization of the visual styles and colors used in
                  components
                </p>
              </blockquote>
            </figure>

            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <div className="flex flex-col justify-center items-center pb-2">
                  <img
                    src="\tailwingLogo.png"
                    style={{ width: "80px", height: "50px" }}
                    className="mx-auto" // Added class to center the image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Tailwind CSS
                </h3>

                <p className="my-4">
                  Go-to framework for websites that need to be extremely fast
                  and depend heavily on SEO.
                </p>
                <p className="my-4">
                  Tailwind CSS provides more utility classes and customization
                  options than Material UI
                </p>
                <p className="my-4">
                  Allows users to build their site components using its provided
                  utility classes
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
