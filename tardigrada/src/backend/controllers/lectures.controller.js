const knex = require("../dbConnection");
const tableName = "lectures";

exports.getLectures = async (req, res) => {
  knex(tableName).then((lectures) => {
    if (!lectures) {
      res.status(401).json({
        message: "failed getting lectures from db",
      });
    } else {
      res.status(200).json(lectures);
    }
  });
};

exports.getCourse = async (req, res) => {
  knex("lectures as l")
    .join("teachers as t", "l.teacherId", "t.userId")
    .where({ id: req.query.id })
    .first()
    .then((course) => {
      if (!course) {
        res.status(401).json({
          message: "failed getting lectures from db",
        });
      } else {
        res.status(200).json(course);
      }
    });
};

exports.getCourseReviews = async (req, res) => {
  knex("reviews")
    .where({ lectureId: req.query.id })
    .then((reviews) => {
      if (!reviews) {
        res.status(401).json({
          message: "failed getting lectures from db",
        });
      } else {
        res.status(200).json(reviews);
      }
    });
};

exports.submitReview = async (req, res) => {
  let name = await this.getChildName(req, res);
  knex("reviews")
    .insert({
      lectureId: req.body.lectureId,
      childId: req.body.childId,
      name,
      stars: req.body.stars,
      content: req.body.content,
      likers: "[]",
    })
    .then((review) => {
      if (!review) {
        res.status(401).json({
          message: "failed saving review to db",
        });
      } else {
        res.status(200).json({ id: review.id, name: name });
      }
    });
};

exports.submitLike = async (req, res) => {
  try {
    knex("reviews")
      .update({
        likers: req.body.likers,
      })
      .where({ id: req.body.id })
      .then((review) => {
        if (!review) {
          res.status(401).json({
            message: "failed saving review to db",
          });
        } else {
          res.status(200).json({ success: true });
        }
      });
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getChildName = async (req, res) => {
  return new Promise((resolve, reject) => {
    knex("children")
      .where({ id: req.body.childId })
      .first()
      .then((child) => {
        if (!child) {
          reject();
        } else {
          resolve(child.firstName + " " + child.lastName);
        }
      });
  });
};

exports.getLectureChildren = async (req, res) => {
  knex("lecturesChildren as lc")
    .select("c.*")
    .where({ lectureId: req.query.lectureId })
    .join("children as c", "c.id", "lc.childId")
    .then((lectureChildren) => {
      if (!lectureChildren) {
        res.status(401).json({
          message: "failed getting lectures of children from db",
        });
      } else {
        res.status(200).json(lectureChildren);
      }
    });
};

exports.getTeacherLectures = async (req, res) => {
  knex(tableName)
    .where({ teacherId: req.query.teacherId })
    .then((lectures) => {
      if (!lectures) {
        res.status(401).json({
          message: "failed getting lectures from db",
        });
      } else {
        res.status(200).json(lectures);
      }
    });
};

exports.getChildLectures = async (req, res) => {
  knex("lecturesChildren as lc")
    .join("lectures as l", "l.id", "lc.lectureId")
    .where({ childId: req.query.childId })
    .then((childLectures) => {
      if (!childLectures) {
        res.status(401).json({
          message: "failed getting lectures of child from db",
        });
      } else {
        res.status(200).json(childLectures);
      }
    });
};

exports.joinLecture = async (req, res) => {
  knex("lecturesChildren")
    .insert(req.body)
    .then((lecturesChild) => {
      if (!lecturesChild) {
        res.status(401).json({
          message: "failed saving lecturesChild to db",
        });
      } else {
        res.status(200).json({ success: true });
      }
    });
};

exports.leaveLecture = async (req, res) => {
  knex("lecturesChildren")
    .where({ childId: req.body.childId, lectureId: req.body.lectureId })
    .del()
    .then((lecturesChild) => {
      if (!lecturesChild) {
        res.status(401).json({
          message: "failed deleting lecturesChild from db",
        });
      } else {
        res.status(200).json({ success: true });
      }
    });
};

exports.saveStationery = async (req, res) => {
  knex(tableName)
    .update({
      stationeryText: req.body.stationeryText,
      stationeryFile: req.body.stationeryFile,
    })
    .where({ id: req.body.lectureId })
    .then((u) => res.status(!!u ? 200 : 404).send({ success: true }))
    .catch((e) => res.status(500).json(e));
};

exports.savePersonalSlot = async (req, res) => {
  if (req.body.userId) {
    req.body.childId = 0;
  }
  if (req.body.isUpdate) {
    delete req.body.isUpdate;
    knex("personalSlots")
      .update(req.body)
      .where({
        childId: req.body.childId,
        userId: req.body.userId,
        day: req.body.day,
        hour: req.body.hour,
      })
      .then((u) => res.status(!!u ? 200 : 404).send({ success: true }))
      .catch((e) => res.status(500).json(e));
  } else {
    delete req.body.isUpdate;
    knex("personalSlots")
      .insert(req.body)
      .then((u) => res.status(!!u ? 200 : 404).send({ success: true }))
      .catch((e) => res.status(500).json(e));
  }
};

exports.getPersonalSlots = async (req, res) => {
  let whereObj = {};
  if (req.query.childId) {
    whereObj.childId = req.query.childId;
  } else {
    whereObj.userId = req.query.userId;
  }
  knex("personalSlots")
    .where(whereObj)
    .then((personalSlots) => {
      if (!personalSlots) {
        res.status(401).json({
          message: "failed getting lectures of child from db",
        });
      } else {
        res.status(200).json(personalSlots);
      }
    });
};

exports.saveUserTz = async (req, res) => {
  let whereObj = {};
  let table = "children";
  if (req.body.childId) {
    whereObj.id = req.body.childId;
  } else {
    whereObj.userId = req.body.userId;
    table = "teachers";
  }
  knex(table)
    .update("timezone", req.body.timezone)
    .where(whereObj)
    .then((timezone) => {
      if (!timezone) {
        res.status(401).json({
          message: "failed saving user timezone to db",
        });
      } else {
        res.status(200).json(timezone);
      }
    });
};

exports.updateLecture = async (req, res) => {
  delete req.body.creation;
  knex(tableName)
    .update(req.body)
    .where({id: req.body.id})
    .then((lecture) => {
      res.status(200).json(lecture);
    });
}
