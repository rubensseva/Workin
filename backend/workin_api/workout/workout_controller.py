from flask import jsonify
from datetime import datetime as dt
from sqlalchemy.exc import SQLAlchemyError

from workin_api import db
from workin_api.workout.workout_model import Workout


def create_workout(name, is_completed, user_id, workout_at, workout_type):
    try:
        if not workout_at:
            workout_at = None
        if not is_completed:
            is_completed = False
        new_workout = Workout(name=name,
                              is_completed=is_completed,
                              user_id=user_id,
                              created=dt.now(),
                              workout_at=workout_at,
                              workout_type=workout_type)
        db.session.add(new_workout)  # Adds new User record to database
        db.session.commit()  # Commits all changes
        return new_workout
    except SQLAlchemyError as e:
        print('got sqlalchemy error:', str(e))
        raise
    except Exception as e:
        print('got general error:', str(e))
        raise


def get_all_json_workouts():
    workouts = Workout.query.all()
    workout_dicts = [
        {
            'id': workout.id,
            'name': workout.name,
            'is_completed': workout.is_completed,
            'user_id': workout.user_id,
            'created': workout.created,
            'workout_at': workout.workout_at,
            'workout_type': workout.workout_type
        }
        for workout in workouts
    ]
    print(workout_dicts)
    return jsonify(workout_dicts)
