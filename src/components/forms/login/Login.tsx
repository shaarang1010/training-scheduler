import { Component, Setter } from "solid-js";
import Card from "../../card/Card";

type LoginFormProps = {
  username: string;
  setUserName: Setter<string>;
  password: string;
  setPassword: Setter<string>;
  onLoginFormSubmitHandler: () => void;
};

export const LoginForm: Component<LoginFormProps> = (props) => {
  return (
    <div class="mt-24">
      <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col my-4">
          <h5 class="mx-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-56">
            Training Logger for Athletes
          </h5>
          <p class="mx-4 mt-5 font-normal text-gray-700 dark:text-gray-400 word-wrap w-56 ">
            Maintain your training logs on the app and schedule training for the
            season
          </p>
        </div>
        <Card title="Login" subtitle="Login to your account" size="lg">
          <form class="space-y-6">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={props.username}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                onInput={(e) => props.setUserName(e.currentTarget.value)}
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                value={props.password}
                onChange={(e) => props.setPassword(e.currentTarget.value)}
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>

                <a
                  href="#"
                  class="ml-4 text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={props.onLoginFormSubmitHandler}
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
