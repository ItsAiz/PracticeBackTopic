const Topic = require("../models/Topic")

const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find()
    res.json(topics)
  } catch (error) {
    console.error("Error retrieving topics:", error)
    res.status(500).json({ error: "Error retrieving topics" })
  }
}

const createTopic = async (req, res) => {
  try {
    console.log(req.body);
    const {
      title,
      description,
      creationDate
        
    } = req.body
  
    const topic = await Topic.create({
      title: title,
      description: description,
      creationDate: creationDate
    })
    res.json({ message: "Topic created successfully", topic })
  }catch (error) {
    console.error("Error creating topic", error)
    res.status(500).json({ error: "Error creating topic" })
  }
}

const updateTopic = async (req, res) =>{
  try {
    const topicId = req.params.id
    const {title, description, creationDate} = req.body
    const updatedTopic = await Topic.findByIdAndUpdate(topicId, {
      title: title,
      description: description,
      creationDate: creationDate
    }, {new: true})
    if(!updatedTopic){
      return res.status(404).json({ message: 'Topic not found'})
    }
    res.json({ message: "Topic has been updated successfully", topic: updatedTopic})

  } catch (error) {
    console.error("Error creating topic", error)
    res.status(500).json({ error: "Error updating topic"})
  }
}

const deleteTopic = async (req, res) => {
  try {
    const deletedTopic = await Topic.findByIdAndRemove(req.params.id)
    if(!deletedTopic){
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.json({ message: 'Topic deleted successfully' });
  }catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const methods = {
    getTopics,
    createTopic,
    updateTopic,
    deleteTopic
}
  