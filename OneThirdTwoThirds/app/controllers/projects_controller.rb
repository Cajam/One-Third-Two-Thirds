class ProjectsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    if current_user
      @projects = current_user.projects
    else
      @projects = Project.all
    end
  end

  def new
    @project = Project.new
  end

  def create
    @project = current_user.projects.create(project_params)

    if @project.save
    redirect_to @project
    else
      render "new"
    end
  end

  def show
    @project = Project.find(params[:id])
    total = 0
    # Loops through each of the project subtasks
    @project.subtasks.each do|task|
      total += task.subhours * 60
      total += task.subminutes
    end
    @total_hours = "#{total/60} hours and #{total%60} minutes"
  end


  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    @project.update!(project_params)

    if @project.update(project_params)
      redirect_to projects_path(@project)
    else
      render "edit"
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_path
  end

  private
    def project_params
      params.require(:project).permit(:title, :text, :hoursleft, :minutesleft)
    end
end
