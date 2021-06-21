class BulletPointsController < ApplicationController
    def create
        note = BulletPoint.new(description: params[:desc])
        if params[:type] == "mu"
            note.matchup_note_id = params[:titleId]
            if note.valid?
                note.save
                render json: {message: "Note saved!"}
            else
                render json: {message: note.errors.messages}
            end
        else
            note.character_note_id = params[:titleId]
            if note.valid?
                note.save
                render json: {message: "Note saved!"}
            else
                render json: {message: note.errors.messages}
            end
        end
    end

    def destroy 
        bullet_point = BulletPoint.find_by_id(params[:id])
        bullet_point.destroy
    end
end
