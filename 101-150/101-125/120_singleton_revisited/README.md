# Singleton Revisited

Implement the singleton pattern with a twist. First, instead of storing one instance, store two instances. And in every even call of _getInstance()_, return the first instance and in every odd call of _getInstance()_, return the second instance.