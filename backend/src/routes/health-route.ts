import {Router} from 'express';

const healthRouter = Router()

healthRouter.get('/', (req, res) => {
  res.status(200).json({
      status: 'Success!! 🎉 ',
      message: 'API is up and running! 🚀 ',
  });
});

export default healthRouter;