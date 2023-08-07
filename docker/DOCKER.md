# Docker for book building & deployment

## What is it and why use it?

Docker allows us to run "containers", which are defined on [the Docker website](https://www.docker.com/resources/what-container/) as:

> A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

Esentially Docker will allow you to build the book across different computers and setups without having to worry about Python packages breaking, or features not being supported on your computer - that is, as long as you get Docker up and running!

## Install and use Docker

You should follow the instructions on the Docker website to install [Docker Desktop](https://docs.docker.com/desktop/) (for Windows the downloaded exe was over 400MB; you will need to log out of windows to complete installation). These instructions were written for Windows users; if you are using a Mac or Linux you can follow the instruction on the [Docker website](https://docs.docker.com/engine/install/); you don't have to install the full Docker desktop, just the engine will do!

- there is no need to create a Docker account
- Windows users should use the Git Bash terminal. If you have never used it: it comes installed with git and provides Unix-like commands. You will need to make it aware of your Anaconda distribution by executing `conda init bash`. Test it by calling a Python package like `jupyter-book`.
- you will also need to install Windows Subsystem for Linux (WSL); it provides a Linux environment on your Wndows machine. Docker Desktop will warn you about WSL not being installed when you start it up for the first time. Try [this](https://learn.microsoft.com/nl-nl/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package) to install. There is a WSL extension in VS Code but it does not work for Docker.
-

A couple "tricks" are needed to get it running smoothly:

1. Administrative privelages: a) running Docker Desktop in admin mode works, and b) you can also try to add your Windows user to the Docker users group, as described [here](https://stackoverflow.com/questions/61530874/docker-how-do-i-add-myself-to-the-docker-users-group-on-windows). In short, open a windows command prompt as administrator and execute: `net localgroup docker-users "your-user-id" /ADD`. You won't get confirmation, but it seems to work.
2. You might also need to use the first two answers [here](https://stackoverflow.com/questions/43041331/docker-forever-in-docker-is-starting-at-windows-task) (done by Robert). Note that the "Switch to Windows containers..." solution is not needed after you restart a few times (but if the container tab does not load, check it).
3. You may need to use git bash with admin rights, but once set up, your default approach should be OK.

Once Docker is set up correctly, you should see a default page on the Containers tab in Docker Desktop that reads "Your running containers show up here." The book contains some Docker configuration and shell scripts to semi-automate the process of using a container. The main idea is that we define the tools needed to build the book with a Docker _image_ (`docker/Dockerfile`), then we create the Docker _container_ to run the scripts to build to book (`build-book.sh`). When the container runs, `docker/docker-compose.yml` provides the instructions for hosting the book on a local webserver so that you can view the book.

One way to test whether your Docker Desktop installation is working is to run through a couple of the basic tutorials in Docker Desktop. THe first two that are advertised in the software should be sufficient as long as they take you through the process of creating a container and viewing the website in your browser.

### Building the book on your computer (Docker)

This is the custom setup for our MUDE book. It assumes you are a Windows user and are using Git Bash as a terminal, with Docker Desktop installed and working. For Mac or Linux, we assume you installed Docker Desktop and that you are using a terminal and everything works perfectly without problems because...well...it's not Windows.

Initial build times may take a few mintutes, but then the Docker image will be cached and not be rebuilt unless needed. This setup will also produce the `_build` folder on your machine. Trying to build locally after building in docker will cause a rebuild for some reason (maybe incompatible settings?), and visa-versa.

The typical workflow is:

- Open Docker Desktop and make sure the empty container page loads. This means the Docker Engine is ready to build your book.
- Run the `deploy-docker.sh` script. You should see the book build output in the terminal window.
- _Note: after you run_ `deploy-docker.sh` _successfully for the first time, you can start the container directly in Docker Desktop._
- View the book at [http://localhost:8000/](http://localhost:8000/) (_not_ the local build at `./book/_build/html/index.html`---the interactive features won't work!). You can also open this by clicking the link in the Container tab
- once the book is successfully deployed, press Ctrl-C to exit back to terminal so you can run further commands (e.g. `stop-deployment.sh` discussed below). The container will keep running in the background.
- Do whatever book tasks you have: read, edit, use, etc
- If you need to rebuild the book to check your changes, run `deploy-docker.sh` again. You may also need to refresh the page you're viewing, and potentially clear the browser cache to see the changes (contact Robert if there is a problem).
- Once you are finished, stop the container using the `stop-deployment.sh` script or by pushing the stop button in Docker Desktop
- Push any commits to GL

### Docker notes for Windows

Besides the installation tricks mentioned above, which are required to get a container running, there is one other issue we (Max/Robert) had in the setup. The build would proceed as desired from `deploy-docker.sh` until the `CMD` line in the `docker/Dockerfile` was reached, where the container terminal could not find the shell script `build-book.sh`, terminating the process in an error. Docker Desktop would show that the container was exited. All of the commands in `build-book.sh` worked fine when entered in the terminal, which helped (eventually) indicate the problem was with line endings in Windows. This was fixed using `* text=auto eol=lf` in `.gitattributes`.

If applying the `.gitattributes` setup to a git repo that is already initialized, you should run these two commands:

```
git rm --cached -r .
git reset --hard
```

See also the discussion in [MR23](https://gitlab.tudelft.nl/mude/book/-/merge_requests/23).

For future troubleshooting, try the docker commands `docker [network, image, container] ls` to see what is running (choose one of the three options in `[ ]`). You can also delete the image and cnotainer from Docker Desktop. If a line in the `docker/Dockerfile` is causing problems, it can be commented and the container terminal can be used to test things, once the container is activated. If you encounter further issues, contact Max.
