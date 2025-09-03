import Activity from '../models/Activity.js';

export const createActivity = async (req, res) => {
  const activityData = req.body;
  const userId = req.userId;

  try {
    const activity = new Activity({ ...activityData, createdBy: userId });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create activity' });
  }
};

export const getActivities = async (req, res) => {
  const { category, location } = req.query;

  try {
    const filter = {};
    if (category) filter.category = category;
    if (location) filter.location = location;

    const activities = await Activity.find(filter).populate('createdBy', 'username');
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get activities' });
  }
};
