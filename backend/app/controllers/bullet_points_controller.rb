class BulletPointsController < ApplicationController
    def create
       type = params[:pointObj][:type]
       if type == "char"
        char_note = CharacterNote.find_by_id(params[:pointObj][:id])
        bullet_point = BulletPoint.new(character_note_id: params[:pointObj][:id], description: params[:pointObj][:description])
        if bullet_point.valid?
            bullet_point.save
            render json: {message: "saved"}
        else
            render json: {message: "invalid"}
        end
       else
        mu_note = MatchupNote.find_by_id(params[:pointObj][:id])
        bullet_point = BulletPoint.new(matchup_note_id: params[:pointObj][:id], description: params[:pointObj][:description])
        if bullet_point.valid?
            bullet_point.save
            render json: {message: "saved"}
        else
            render json: {message: "invalid"}
        end
       end
    end

    def destroy 
        bullet_point = BulletPoint.find_by_id(params[:id])
        bullet_point.destroy
    end
end
