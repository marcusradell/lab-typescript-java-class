type Course = { id: string; name: string };

type CourseRepository = {
  list: () => Promise<Course[]>;
  getById: (id: number) => Promise<Course>;
};

const courseServiceFactory = (
  courseRepository: CourseRepository
): CourseServiceFactory => {
  return {
    list: async () => {
      return courseRepository.list();
    },
    getById: async (id: number) => {
      return courseRepository.getById(id);
    },
  };
};

type CourseServiceFactory = {
  list: () => Promise<Course[]>;
  getById: (id: number) => Promise<Course>;
};
