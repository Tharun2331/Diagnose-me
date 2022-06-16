import numpy as np
import tensorflow as tf
from tf.keras.models import load_model
from tf.keras.preprocessing import image

class Predict:
    def __init__(self,filename):
        self.filename =filename


    def predictiondogcat(self):
        # load model
        model = load_model("Diagnose-me/backend/vgg85.h5")
        # summarize model
        #model.summary()
        imagename = self.filename
        test_image = image.load_img(imagename, target_size = (224,224,3))
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis = 0)
        result = model.predict(test_image)
        print(result)


