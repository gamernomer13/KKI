const drawToolbar = {
  actions: {
    title: '�������� ���������',
    text: '��������'
  },
  finish: {
    title: '��������� ���������',
    text: '���������'
  },
  undo: {
    title: '������� ��������� ������������ �����',
    text: '������� ��������� �����'
  },
  buttons: {
    polyline: '���������� ���������',
    polygon: '�������',
    rectangle: '���������� �������������',
    circle: '���������� ����������',
    marker: '��������� ������',
    circlemarker: '��������� ������-����������'
  }
}

const drawHandlers = {
  circle: {
    tooltip: {
        start: '������� � ���������� ��� �� �������� ������.'
    },
    radius: '������'
  },
  circlemarker: {
    tooltip: {
      start: '������ �� ����� ��� ��������� �������-����������.'
    }
  },
  marker: {
    tooltip: {
        start: '������ �� ����� ��� ��������� �������.'
    }
  },
  polygon: {
    error: '<strong>������:</strong> !',
    tooltip: {
      start: '�������, ����� ������ �������� �������.',
      cont: '�������� ��������� ����� ��������.',
      end: '������� ������ �����, ����� �������� ������ �������� � ��������� ���������.'
    }
  },
    polyline: {
        error: '<strong>������:</strong> ���� ����� �� ����� ������������!',
        tooltip: {
            start: '�������, ����� ������ �������� ���������.',
            cont: '�������, ����� ���������� ��������� ���������.',
            end: '������� ��������� ����� ��� ���������� ���������.'
        }
    },
  rectangle: {
    tooltip: {
        start: '������� � ����������, ����� ���������� �������������.'
    }
  },
  simpleshape: {
    tooltip: {
        end: '��������� ����, ����� ��������� ���������.'
    }
  }
}

const editToolbar = {
  actions: {
    save: {
        title: '��������� ���������.',
      text: '���������'
    },
    cancel: {
        title: '�������� �������������� � ��� ���������.',
      text: '��������'
    },
    clearAll: {
      title: '�������� ��� ������� ���������.',
      text: '�������� ��'
    }
  },
  buttons: {
      edit: '�������������.',
      editDisabled: '��� ����� ��� ��������������.',
      remove: '�������.',
      removeDisabled: '��� ����� ��� ��������.'
  }
}

const editHandlers = {
  edit: {
    tooltip: {
        text: '���������� ��� �������������� �������� � �������������� ��������.',
        subtext: '������� �������, ����� �������� ���������.'
    }
  },
  remove: {
    tooltip: {
        text: '������� �� ������, ����� �������'
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
