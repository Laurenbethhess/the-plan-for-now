class TodosController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Todo.all
    end

    def show
        render json: find_todo
    end

    def create
        todo = Todo.create!(todo_params)
        render json: todo, status: :created
    end

    def update
        todo = find_todo
        todo.update!(todo_params)
        render json: todo
    end

    def destroy
        find_todo.destroy
        head :no_content
    end

private
    def find_todo
        Todo.find(params[:id])
    end

    def todo_params
        params.permit(:category_id, :user_id, :todo, :importance)
    end

end
