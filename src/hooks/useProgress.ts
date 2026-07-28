import { useEffect, useMemo, useState } from 'react';
import type { ProgressState } from '../types';
import { modules } from '../data/modules';

const STORAGE_KEY = 'rupeeroots-progress';

const defaultProgress: ProgressState = {
  completedModules: [],
  currentModuleId: modules[0].id,
  currentLessonId: modules[0].lessons[0].id,
  completedLessons: [],
};

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === 'undefined') return defaultProgress;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProgress;
    try {
      return JSON.parse(stored) as ProgressState;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const currentModule = useMemo(() => modules.find((module) => module.id === progress.currentModuleId) ?? modules[0], [progress.currentModuleId]);
  const currentLesson = useMemo(() => currentModule.lessons.find((lesson) => lesson.id === progress.currentLessonId) ?? currentModule.lessons[0], [currentModule, progress.currentLessonId]);

  const completedCount = progress.completedModules.length;
  const overallCompletion = Math.round((completedCount / modules.length) * 100);

  const markLessonComplete = (_moduleId: string, lessonId: string) => {
    setProgress((prev) => {
      const completedLessons = prev.completedLessons.includes(lessonId) ? prev.completedLessons : [...prev.completedLessons, lessonId];
      return {
        ...prev,
        completedLessons,
      };
    });
  };

  const completeModule = (moduleId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId) ? prev.completedModules : [...prev.completedModules, moduleId],
    }));
  };

  const updateLesson = (moduleId: string, lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      currentModuleId: moduleId,
      currentLessonId: lessonId,
    }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  return {
    progress,
    currentModule,
    currentLesson,
    completedCount,
    overallCompletion,
    markLessonComplete,
    completeModule,
    updateLesson,
    resetProgress,
  };
};
