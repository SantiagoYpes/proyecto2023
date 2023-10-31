import User from "../models/User.js";
import { except } from "chai";

export const loginUser = async (req, res) => {
    console.log(req.body);
    const { email, pass } = req.body;
    const query = User.find({ email: email });

    query
        .exec()
        .then((users) => {
            const found = users.find((user) => user.password == pass);

            except(found).to.exist;
            except(found).to.have.property("id");
            except(found).to.have.property("type");
            except(found).to.have.property("ced");
            console.log("encontrado");

            res.send({
                id: found.id,
                type: found.type,
                ced: found.ced,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
};

export const newTeacher = async (req, res) => {
    try{
        except(req.body.ced).to.not.equal("");
        console.log(req.body);

        const user = new User(req.body);
        await user.save();
        console.log("Profesor Creado");

        except(user._id).to.exist;

        res.send(user._id).to.exist;

        res.send(user._id);
    } catch (error) {
        console.log(error);

        res.status(400).send(error);
    }
};

export const getTeachers = async (req, res) => {
    try{
        const list = await User.find();

        expect(list).to.be.an('array');
        list.forEach((teacher) => {
            except(teacher).to.have.property('type').that.equals('teacher');
        });

        const listTeachers = list
            .filter((teacher) => teacher.type === "teacher")
            .map((teacher) => teacher);

        except(listTeachers).to.be.an('array');
        res.send(listTeachers);
    } catch (error) {
        console.log(error);

        res.status(400).send(error);
    }
};
