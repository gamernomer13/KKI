const drawToolbar = {
  actions: {
    title: 'Отменить рисование',
    text: 'Отменить'
  },
  finish: {
    title: 'Завершить рисование',
    text: 'Завершить'
  },
  undo: {
    title: 'Удалить последнюю нарисованную точку',
    text: 'Удалить последнюю точку'
  },
  buttons: {
    polyline: 'Нарисовать полилинию',
    polygon: 'Создать',
    rectangle: 'Нарисовать прямоугольник',
    circle: 'Нарисовать окружность',
    marker: 'Поставить маркер',
    circlemarker: 'Поставить маркер-окружность'
  }
}

const drawHandlers = {
  circle: {
    tooltip: {
        start: 'Нажмите и перетащите что бы выберать радиус.'
    },
    radius: 'Радиус'
  },
  circlemarker: {
    tooltip: {
      start: 'Нжмите на карте для установки маркера-окружности.'
    }
  },
  marker: {
    tooltip: {
        start: 'Нжмите на карте для установки маркера.'
    }
  },
  polygon: {
    error: '<strong>Ошибка:</strong> !',
    tooltip: {
      start: 'Нажмите, чтобы начать рисовать полигон.',
      cont: 'Выберете следующую точку полигона.',
      end: 'Нажмите первую точку, чтобы замкнуть контур полигона и завершить рисование.'
    }
  },
    polyline: {
        error: '<strong>Ошибка:</strong> Края линии не могут пересекаться!',
        tooltip: {
            start: 'Нажмите, чтобы начать рисовать полилинию.',
            cont: 'Нажмите, чтобы продолжить рисование полилинии.',
            end: 'Нажмите последнюю точку для завершения рисования.'
        }
    },
  rectangle: {
    tooltip: {
        start: 'Нажмите и перетащите, чтобы нарисовать прямоугольник.'
    }
  },
  simpleshape: {
    tooltip: {
        end: 'Отпустите мышь, чтобы закончить рисование.'
    }
  }
}

const editToolbar = {
  actions: {
    save: {
        title: 'Сохранить изменения.',
      text: 'Сохранить'
    },
    cancel: {
        title: 'Отменить редактирование и все изменения.',
      text: 'Отменить'
    },
    clearAll: {
      title: 'Очистить всю область рисования.',
      text: 'Очистить всё'
    }
  },
  buttons: {
      edit: 'Редактировать.',
      editDisabled: 'Нет слоев для редактирования.',
      remove: 'Удалить.',
      removeDisabled: 'Нет слоев для удаления.'
  }
}

const editHandlers = {
  edit: {
    tooltip: {
        text: 'Инструмент для редактирования объектов и перетаскивания маркеров.',
        subtext: 'Нажмите «Отмена», чтобы отменить изменения.'
    }
  },
  remove: {
    tooltip: {
        text: 'Нажмите на объект, чтобы удалить'
    }
  }
}

module.exports = {
  draw: {
    toolbar: drawToolbar,
    handlers: drawHandlers
  },
  edit: {
    toolbar: editToolbar,
    handlers: editHandlers
  }
}
